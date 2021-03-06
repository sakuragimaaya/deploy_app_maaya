import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase'

const CreateUser = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handClick = () => {
        history.push('/login')
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('success createUser')
            })
            .catch(function (error) {
            });
    }

    return (
        <div>
            <h2>CreateUser</h2>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handClick}>Create</Button>
            <Link to='/' >戻る</Link>
        </div>
    );
};

export default CreateUser;