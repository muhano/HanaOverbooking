import "../styles/Login.css";
import { useState, useEffect } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {
    const MySwal = withReactContent(Swal)
    const isLoggedIn = localStorage.getItem("access_token")
    let navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })
    const [loginError, setLoginError] = useState();

    useEffect(()=> {
        if (isLoggedIn) {
            navigate('/')
        }
    })

    const handleFormInput = (e) => {
        const value = e.target.value
        const field = e.target.name
        setLoginForm({
            ...loginForm,
            [field]: value
        })
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/user/login',
                data: loginForm
            });
            setLoginError()
            localStorage.setItem('access_token', response.data.access_token)
            if (response.status === 200) {
                MySwal.fire(
                    'Log In Success!',
                    '',
                    'success'
                )
                navigate('/')
            }
        } catch (err) {
            console.log(err);
            setLoginError(err.response.data.message)
        }
    }

    return (
        <div className="text-center min-vh-100" id="LoginFormContainer">
            <div className="form-signin" id="LoginFormInner">
                <form
                    onSubmit={handleLoginSubmit}
                >
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            name="email"
                            value={loginForm.email}
                            onChange={handleFormInput}
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            name="password"
                            value={loginForm.password}
                            onChange={handleFormInput}
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Sign in
                    </button>

                    {loginError && (
                        <h6 className="mt-3" style={{color: 'red'}}>
                            {loginError}
                        </h6>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Login