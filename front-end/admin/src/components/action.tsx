"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { toast } from "sonner"
import { Label } from "./ui/label"

export interface Shoe {
    id: number
    name: string
    description: string
    price: number
    stock: number
    image_url: string
    created_at: string
    updated_at: string
}

interface ActionProps {
    openEdit: boolean
    setOpenEdit: (open: boolean) => void
    openDelete: boolean
    setOpenDelete: (open: boolean) => void
    openAdd: boolean
    setOpenAdd: (open: boolean) => void
    selectedShoe: Shoe | null
    token: string | null
    onSuccess: () => void
}


export function ShoeActions({
    openEdit,
    setOpenEdit,
    openDelete,
    setOpenDelete,
    openAdd,
    setOpenAdd,
    selectedShoe,
    token,
    onSuccess,
}: ActionProps) {
    const [formData, setFormData] = useState<Shoe | null>(null)
    const [newShoe, setNewShoe] = useState<Omit<Shoe, "id" | "created_at" | "updated_at">>({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        image_url: "",
    })
    const [loading, setLoading] = useState(false)
    const now = new Date()
    const formattedDate = now.toLocaleString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })

    useEffect(() => {
        if (openEdit && selectedShoe && token) {
            fetchShoeById(selectedShoe.id)
        }
    }, [openEdit])

    const fetchShoeById = async (id: number) => {
        try {
            setLoading(true)
            const res = await axios.get(`http://localhost:3001/admin/shoes/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setFormData(res.data.data)
        } catch (error) {
            console.error("Failed to fetch shoe by ID:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (formData) {
            setFormData({
                ...formData,
                [name]: name === "price" || name === "stock" ? Number(value) : value,
            })
        }
    }

    const handleNewShoeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setNewShoe({
            ...newShoe,
            [name]: name === "price" || name === "stock" ? Number(value) : value,
        })
    }


    const handleAddShoe = async () => {
        if (!token) return
        try {
            await axios.post(`http://localhost:3001/admin/shoes`, newShoe, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setOpenAdd(false)
            setNewShoe({ name: "", description: "", price: 0, stock: 0, image_url: "" })
            onSuccess()
            toast.success("Data berhasil ditambahkan.", {
                description: formattedDate,
            })
        } catch (error) {
            console.error("Failed to add shoe:", error)
        }
    }

    const handleSaveEdit = async () => {
        if (!formData || !token) return
        try {
            await axios.put(`http://localhost:3001/admin/shoes/${formData.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setOpenEdit(false)
            onSuccess()
            toast.success("Data berhasil diubah.", {
                description: formattedDate,
            })
        } catch (error) {
            console.error("Failed to update shoe:", error)
        }
    }

    const handleDelete = async () => {
        if (!selectedShoe || !token) return
        try {
            await axios.delete(`http://localhost:3001/admin/shoes/${selectedShoe.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setOpenDelete(false)
            onSuccess()
            toast.success("Data berhasil dihapus.", {
                description: formattedDate,
            })
        } catch (error) {
            console.error("Failed to delete shoe:", error)
        }
    }

    return (
        <>
            {/* Modal Edit */}
            <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Shoe</DialogTitle>
                    </DialogHeader>
                    {loading ? (
                        <p>Loading...</p>
                    ) : formData ? (
                        <form className="grid gap-4 py-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input name="name" value={formData.name} onChange={handleFormChange} />
                            </div>
                            <div>
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    className="w-full border rounded px-3 py-2"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <Label htmlFor="price">Price</Label>
                                <Input name="price" type="number" value={formData.price.toString()} onChange={handleFormChange} />
                            </div>
                            <div>
                                <Label htmlFor="stock">Stock</Label>
                                <Input name="stock" type="number" value={formData.stock.toString()} onChange={handleFormChange} />
                            </div>
                            <div>
                                <Label htmlFor="image_url">Image URL</Label>
                                <Input name="image_url" value={formData.image_url} onChange={handleFormChange} />
                            </div>
                        </form>
                    ) : (
                        <p>Data not found</p>
                    )}
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleSaveEdit}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


            {/* Modal Add */}
            <Dialog open={openAdd} onOpenChange={setOpenAdd}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Shoe</DialogTitle>
                    </DialogHeader>
                    <form className="grid gap-4 py-4">
                        <div className="grid items-center gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input name="name" value={newShoe.name} onChange={handleNewShoeChange} />
                        </div>
                        <div className="grid items-center gap-3">
                            <Label htmlFor="description">Description</Label>
                            <textarea
                                name="description"
                                value={newShoe.description}
                                onChange={handleNewShoeChange}
                                className="w-full border rounded px-3 py-2"
                                rows={4}
                            />
                        </div>
                        <div className="grid items-center gap-3">
                            <Label htmlFor="price">Price</Label>
                            <Input name="price" type="number" value={newShoe.price} onChange={handleNewShoeChange} />
                        </div>
                        <div className="grid items-center gap-3">
                            <Label htmlFor="stock">Stock</Label>
                            <Input name="stock" type="number" value={newShoe.stock} onChange={handleNewShoeChange} />
                        </div>
                        <div className="grid items-center gap-3">
                            <Label htmlFor="image_url">Image URL</Label>
                            <Input name="image_url" value={newShoe.image_url} onChange={handleNewShoeChange} />
                        </div>
                    </form>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleAddShoe}>Add</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


            {/* Modal Delete */}
            <Dialog open={openDelete} onOpenChange={setOpenDelete}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                    </DialogHeader>
                    <p>This action cannot be undone.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setOpenDelete(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
