import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../config/firebase'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleClick = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/main')
                console.log('success createUser')
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode, 'errorCode check')
                // ...
            });
    }

    return (
        <>
            <div> Login </div>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>login</Button>
            <Link to='/' >戻る</Link>
            <Link to="createUser">CreateUserに移動</Link>
        </>
    );
};

export default Login