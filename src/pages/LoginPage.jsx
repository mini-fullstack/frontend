import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function LoginPage() {
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setLoginForm({
      ...loginForm,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    navigate('/')
  }

  return (
    <main className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>로그인</h1>

        <div className="form-group">
          <label>아이디</label>
          <input
            type="text"
            name="username"
            value={loginForm.username}
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <button type="submit">로그인</button>
      </form>
    </main>
  )
}

export default LoginPage