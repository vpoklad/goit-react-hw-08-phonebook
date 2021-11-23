import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import s from './Form.module.css'
import { setCredentials } from '../../redux/slice'


export default function RegisterForm() {
const{register, handleSubmit, reset, formState: { errors }}=useForm();
const dispatch = useDispatch();
// const onSubmit = data => {console.log(data);
// reset()};
const onSubmit = data => {dispatch(setCredentials(data))
    reset()}

    
    return (
        <>
            
            
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={s.label}>Name
    <input {...register("name", {
            required: true,
            pattern:/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/,
          })} className={s.input}  title ="Input your Name" type="text" placeholder="Name" />
          {errors?.name?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
        {errors?.name?.type === 'pattern' && (
          <p className={s.error}>Alphabetical characters only</p>
        )}
                </label>
                <label className={s.label}>Email
    <input {...register("email", {required: true})}className={s.input} title ="Input your email" type="email" placeholder="example@test.com" />
    {errors?.name?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
                </label>
                <label className={s.label}>Password                    
    <input {...register("password", {required: true} )} className={s.input} title ="Input your password" type="password" placeholder="Min 7 characters long" />
    {errors?.name?.type === 'required' && (
          <p className={s.error}>This field is required</p>
        )}
    
    </label>
    <button className={s.button} type="submit">REGISTER</button>
                
  </form>
 
</>
    )
    
}