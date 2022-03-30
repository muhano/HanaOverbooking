import "../styles/Login.css";
import { useState } from "react"
import axios from "axios"

function Login() {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
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
            console.log(response, "<--------");
        } catch (err) {
            console.log(err);
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
                </form>
            </div>
        </div>
    )
}

export default Login