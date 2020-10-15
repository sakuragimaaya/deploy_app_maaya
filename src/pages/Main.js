import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { createMydata, createData, readData, updateData, deleteData } from '../config/firebase'
import TextField from '@material-ui/core/TextField';

const Main = () => {

    const [id, setId] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [born, setBorn] = useState('');

    const handleMydata = async () => {
        await createMydata(id, first, last, born);
    }
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
            <TextField id="id" label="id" value={id} onChange={e => setId(e.target.value)} />
            <TextField id="first" label="first" value={first} onChange={e => setFirst(e.target.value)} />
            <TextField id="last" label="last" value={last} onChange={e => setLast(e.target.value)} />
            <TextField id="born" label="born" value={born} onChange={e => setBorn(e.target.value)} /><br />
            <Button variant='outlined' onClick={handleMydata}>MY DATA CREATE</Button>
            <Button variant='outlined' onClick={handleCreate}>create</Button>
            <Button variant='outlined' onClick={handleRead}>read</Button>
            <Button variant='outlined' onClick={handleApp}>updateData</Button>
            <Button variant='outlined' onClick={handleDelete}>delete</Button>
        </div>
    )
};

export default Main;