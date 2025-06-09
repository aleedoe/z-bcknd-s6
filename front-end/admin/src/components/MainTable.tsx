"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoeActions } from "./action"

interface Shoe {
    id: number
    name: string
    description: string
    price: number
    stock: number
    image_url: string
    created_at: string
    updated_at: string
}

export function MainTable() {
    const [shoes, setShoes] = useState<Shoe[]>([])
    const [token, setToken] = useState<string | null>(null)
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [selectedShoe, setSelectedShoe] = useState<Shoe | null>(null)


    useEffect(() => {
        // Ambil token dari localStorage saat pertama kali load
        const adminToken = localStorage.getItem("token")
        setToken(adminToken)
        if (adminToken) {
            fetchShoes(adminToken)
        } else {
            console.error("Token not found. Please login first.")
        }
    }, [])

    const fetchShoes = async (token: string) => {
        try {
            const res = await axios.get("http://localhost:3001/admin/shoes", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setShoes(res.data.data)
        } catch (error) {
            console.error("Error fetching shoes:", error)
        }
    }

    const handleEdit = (shoe: Shoe) => {
        setSelectedShoe(shoe)
        setOpenEdit(true)
    }

    const handleDelete = (shoe: Shoe) => {
        setSelectedShoe(shoe)
        setOpenDelete(true)
    }


    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>
                    <h1>Dashboard</h1>
                </CardTitle>
                <Button onClick={() => setOpenAdd(true)}>+ Tambah Sepatu</Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Daftar sepatu terbaru</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead className="text-right">Harga</TableHead>
                            <TableHead className="text-right">Stok</TableHead>
                            <TableHead className="text-center">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {shoes.map((shoe) => (
                            <TableRow key={shoe.id}>
                                <TableCell className="font-medium">{shoe.name}</TableCell>
                                <TableCell>{shoe.description}</TableCell>
                                <TableCell className="text-right">Rp {shoe.price.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{shoe.stock}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" onClick={() => handleEdit(shoe)}>
                                            Edit
                                        </Button>
                                        <Button variant="destructive" size="sm" onClick={() => handleDelete(shoe)}>
                                            Delete
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total Sepatu</TableCell>
                            <TableCell className="text-right" colSpan={2}>{shoes.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
            <ShoeActions
                openAdd={openAdd}
                setOpenAdd={setOpenAdd}
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
                selectedShoe={selectedShoe}
                token={token}
                onSuccess={() => fetchShoes(token!)}
            />

        </Card>
    )
}
