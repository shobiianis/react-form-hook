import React from 'react';
import {useForm} from 'react-hook-form'

const Form = () => {
  const {register,handleSubmit} =useForm()
  const onSubmit=(data)=>console.log(data) //all will become as one object as data when submit is pressed 
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name' {...register("fullname")} />
            <input type="text" placeholder='email' {...register("email")} />
            <input type="text" placeholder='age'  {...register("age")} />
            <input type="text" placeholder='pswd' {...register("pswd")}/>
            <input type="submit" 
            
            />
        </form>
    </div>
  )
}

export default Form