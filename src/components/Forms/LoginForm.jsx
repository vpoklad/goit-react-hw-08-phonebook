import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import s from './Form.module.css'
import { setCredentials } from '../../redux/slice'

import {useLoginMutation} from '../../services/phoneBookAPI'
export default function LoginForm() {
     
    
    const{register, handleSubmit, reset, formState: { errors }}=useForm();
    const [loginUser, {isSuccess }] = useLoginMutation()
    const dispatch = useDispatch();


    const onSubmit = data => {loginUser(data).unwrap().then(fulfilled => dispatch(setCredentials(fulfilled)))
        
        reset()}

   
    return (
        <>
        
            
            
            
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                
                <label className={s.label}>Email
    <input {...register("email", {required: true})}className={s.input} title ="Input your email" type="email"  />
    {errors?.name?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
                </label>
                <label className={s.label}>Password                    
    <input {...register("password", {required: true} )} className={s.input} title ="Input your password" type="password"  />
    {errors?.password?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
    
    </label>
    <button className={s.button} type="submit">LOGIN</button>
                
  </form>
 
</>
    )
    
}