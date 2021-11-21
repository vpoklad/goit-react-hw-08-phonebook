import s from './Form.module.css'
export default function LoginForm() {

    return (
        <>
            <div className={s.appLogo}></div>
            
            <form className={s.form}>
                <label className={s.label}>Login
    <input className={s.input} title ="Input your email" type="email"  />
                </label>
                <label className={s.label}>Password                   
    <input className={s.input} title ="Input your password" type="password"  />
    </label>
    <button className={s.button} type="submit">LOGIN</button>
                
  </form>
 
</>
    )
    
}