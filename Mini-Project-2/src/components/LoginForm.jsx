function LoginForm() {
    return (
        <div>
            <form>
                <div>
                    <label>Username:
                        <input type="email" name="userEmail" />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input type="password" name="userPassword" />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;