import React,{ useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (

        <div>
            <h1>Login page</h1>
            <form>
                <div>
                    <label htmlFor='email'>Username</label>
                    <input
                        type="text"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    //Aqui hay un evento para manejar los cambios en el input
                    />
                </div>
                <label htmlFor='password'>Password</label>
                <input
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
