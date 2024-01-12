import { useState } from "react";

function LoginForm() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [submitResult, setSubmitResult] = useState('')

    const handleUpdateEmail = (e) => {
        console.log('handleUpdateEmail', e.target.value)

        if (e.target.value.includes('@')) {
            console.log('Validate true')
        } else {
            console.log('Validate false')
        }
        setUserEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 characters')
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address')
        } else {
            setSubmitResult('Successful login.')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:
                        <input type="email" value={userEmail} name="userEmail"
                            onChange={(e) => handleUpdateEmail(e)} />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type="password" value={userPassword} name="userPassword"
                            onChange={(e) => setUserPassword(e.target.value)} />
                    </label>
                </div> 
                <button>Log in</button>
                <p>{submitResult}</p>
            </form>
        </div>
    )
}

export default LoginForm;