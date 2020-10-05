import React from 'react'
import Button from '@material-ui/core/Button'
import { createData, readData, updateData, deleteData } from '../config/firebase'



const Main = () => {
    const handleCreate = async () => {
        await createData();
    }
    const handleRead = async () => {
        await readData()
    }
    const handleApp = async () => {
        await updateData()
    }
    const handleDelete = async () => {
        await deleteData()
    }




    return (
        <div>
            <h2>Main</h2>
            <Button variant='outlined' onClick={handleCreate}>create</Button>
            <Button variant='outlined' onClick={handleRead}>read</Button>
            <Button variant='outlined' onClick={handleApp}>updateData</Button>
            <Button variant='outlined' onClick={handleDelete}>delete</Button>
        </div>
    );
};

export default Main;