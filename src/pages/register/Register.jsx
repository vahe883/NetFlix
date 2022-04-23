import './register.scss'
import {useRef, useState} from 'react'

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

  return (
    <div className='register'>
      <div className="top">
          <div className="wrapper">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="" 
                className='logo'    
            />
                <button className="login">Sign In</button>
          </div>
      </div>
      <div className="container">
          <h1>
            Фильмы, сериалы и многое другое без ограничений.
          </h1>
          <h2>
            Смотрите где угодно. Отменить подписку можно в любое время.
          </h2>
          <p>
            Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.
          </p>
          {
              !email ? (
                <div className="input">
                    <input type="email" placeholder='email address' ref={emailRef} />
                    <button className='registerButton' onClick={handleStart}> Get Started</button>
                </div>
              ) : (
                <form className="input">
                    <input type="password" placeholder='password' ref={passwordRef} />
                    <button className='registerButton' onClick={handleFinish}> Start</button>
                </form>
              )
          }
         
          
      </div>
    </div>
  )
}
