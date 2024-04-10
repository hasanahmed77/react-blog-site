import { useState } from "react"
import { useSignup } from "../../hooks/useSignUp"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password)

    await signup(email,password)    
  }

  return (
    <form className="new-blog-form new-blog" onSubmit={handleSubmit}>
      <h1>sign up</h1>
      
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

      <button disabled={isLoading} className="btn-add-blog">sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup