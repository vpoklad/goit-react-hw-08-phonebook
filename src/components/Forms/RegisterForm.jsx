import s from './Form.module.css'
export default function RegisterForm() {

    return (
        <>
            <div className={s.appLogo}></div>
            
            <form className={s.form}>
                <label className={s.label}>Login
    <input className={s.input}  title ="Input your login" type="text" placeholder="Name" />
                </label>
                <label className={s.label}>Email
    <input className={s.input} title ="Input your email" type="email" placeholder="example@test.com" />
                </label>
                <label className={s.label}>Password                    
    <input className={s.input} title ="Input your password" type="password" placeholder="Min 7 characters long" />
    </label>
    <button className={s.button} type="submit">REGISTER</button>
                
  </form>
 
</>
    )
    
}