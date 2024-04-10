import { useState } from "react"
import { useLogin } from '../../hooks/useLogin'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async e => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form className="new-blog-form new-blog" onSubmit={handleSubmit}>
      <h1>log In</h1>
      
      <label className="labels">Email address:</label>
      <input 
        className="inputs"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label className="labels">Password:</label>
      <input 
        className="inputs"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading} className="btn-add-blog" onClick={handleSubmit}>log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login