import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import fireInitial from '../../pages/api/firebase/initialize';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,} from 'firebase/auth'
import {collection, addDoc, getFirestore} from 'firebase/firestore'

function Signup(props) {

    const auth = getAuth()
    const db = getFirestore()
    const [formResult, setFormResult] = useState({})

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

    //  createUserWithEmailAndPassword(auth, data.email, data.password)
     
    // .then(async(user)=>{
    //     setFormResult({err:false, message: 'Your inquery has been sent. Our move consultant will contact you shortly'})
    //     console.log(user.user.uid)
        try{
            const ref =  addDoc(collection(db, "users"),{
                // id: user.user.uid,
                userName: data?.name,
                mobile: data?.mobile,
                email: data?.email,
                booking: props?.data
            })
            console.log(ref)
            setFormResult({err:false, message: 'Your inquery has been sent. Our move consultant will contact you shortly'})
            reset()
            // console.log(addRef)
        }catch(e){
            setFormResult({err:true, message: e.message || e})
        }
    // })
    // .catch((err)=>{
    //     console.log(err)
    //     setFormResult({err:true, message: err.message})
    // })
    }
  return (
    <div className="bg-white w-full md:w-3/6 p-4 rounded">Finalize
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" >

    <div className="relative w-full">
        <input type="text" {...register('name', { required: true })}  id="txtname"  className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="txtname" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full Name</label>
        {errors.name && <p className='text-red-500 text-sm'>Name is required.</p>}
    </div>
    <div className="relative w-full">
        <input type="email" {...register('email', { required: true })}  id="txtEmail"  className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="txtEmail" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email id</label>
        {errors.email && <p className='text-red-500 text-sm'>Email is required.</p>}
    </div>

    <div className="relative w-full">
        <input type="number" {...register('mobile', { required: true })}  id="txtEmail"  className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="txtmobile" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mobile No.</label>
        {errors.mobile && <p className='text-red-500 text-sm'>Mobile No. is required.</p>}
    </div>

    {/* <div className="relative w-full">
        <input type="password" {...register('password', { required: true })}  id="txtEmail"  className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="txtpassword" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
        {errors.password && <p className='text-red-500 text-sm'>Password is required.</p>}
    </div> */}

    <p className={formResult.err ? 'text-red-500 text-sm' : 'text-green-500 text-sm'}>{formResult.message?.toString()}</p>

    <button   className='bg-blue-600 p-2 text-white hover:bg-orange-400 rounded-md w-full'>Sent</button>
    </form>
    </div>
  )
}

export default Signup