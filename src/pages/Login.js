import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'


const Login = () => {
    const history = useHistory()
    const hndleClick = () => {
        history.push('/main')
    }
    return (
        <>
            <div> Login </div>

            <TextField id="standard-basic" label="Standard" /><br />
            <TextField id="standard-basic" label="Standard" /><br />
            <Button onClick={hndleClick} variant="contained">Default</Button>
            <Link to="createUser">CreateUserに移動</Link>
            <Link to="main">Mainに移動</Link>

        </>
    );
};


export default Login