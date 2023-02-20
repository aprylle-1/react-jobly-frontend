import useUpdateForm from "./hooks/useForm";
import "./SignUpForm.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SignUpForm ({register, currentUser}) {


    const initialValue = {
        firstName : "",
        lastName : "",
        password : "",
        email : "",
        username : ""
    }

    const {form, onChange, clear} = useUpdateForm(initialValue)
    async function registerNewUser (e) {
        e.preventDefault()
        await register(form)
    }
    
    const navigate = useNavigate()
    useEffect(()=>{
        if(currentUser){
            navigate("/")
        }
    },[])
    return (
        <div className="SignUpForm">
        <form onSubmit={registerNewUser}>
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username" className="form-label">Username</label>
                <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                value={form.username}
                onChange={onChange}
                placeholder="username"
            />
            </div>
            <div>
                <label htmlFor="firstName" className="form-label">Email</label>
                <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={onChange}
                placeholder="email"
            />
            </div>
            <div>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder="First Name"
            />
            </div>
            <div>
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                className="form-control"
                type="text"
                name="lastName"
                id="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder="Last Name"
            />
            </div>
            <div>
                <label htmlFor="password" className="form-label">Password</label>
                <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={onChange}
                placeholder="password"
                />
            </div>
            <div className="buttons">
                <button className="btn btn-primary">Signup</button>
                <button className="btn btn-outline-secondary" onClick={clear}>Clear</button>
            </div>
        </form>
        </div>
    )
}

export default SignUpForm;