import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { RiFlightTakeoffFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiPackedPlanks, GiOfficeChair } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'
import { BiBed } from 'react-icons/bi'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { AnimatePresence, motion, useCycle, } from "framer-motion";
import { useForm } from 'react-hook-form'
import Signup from '../global/signup'
import { FaWarehouse } from 'react-icons/fa'


function Booking() {


  const { register, handleSubmit, formState: { errors }, } = useForm();


  const [move, setMove] = useState({})
  const [step, setStep] = useState(1)

  useEffect(() => {

    if (!move.type == undefined || !move.type == "") setStep(2)
    if (!move.category == undefined || !move.category == "") setStep(3)
    if (!move.item == undefined || !move.item == "") setStep(4)
    if (!move.movingfrom == undefined || !move.movingfrom == "") setStep(5)
  }, [move])


  return (
    <div>
    <div className='text-center text-lg md:text-3xl text-yellow-400 uppercase'>Get a free Quote</div>

      {/* step 1 */}

      <AnimatePresence>

        {
          step === 1 && <motion.div
            className='flex justify-center items-center gap-2 md:gap-4 my-4 flex-wrap'
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
          >
            <div onClick={() => setMove({ type: "domestic" })} className='p-2 w-32 md:w-52 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <TbTruckDelivery size={44} color="gray" />Domestic Move</div>
            <div onClick={() => setMove({ type: "intl" })} className='p-2 w-32 md:w-52 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              < RiFlightTakeoffFill size={44} color="gray" />Int. Relocation</div>
            <div onClick={() => setMove({ type: "office" })} className='p-2  w-32 md:w-52 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center '>
              <GiOfficeChair size={44} color="gray" />Office Move</div>
            <div onClick={() => setMove({ type: "Storage" })} className='p-2  w-32 md:w-52 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center '>
              <GiPackedPlanks size={44} color="gray" />Self Storage</div>
          </motion.div>



        }
      </AnimatePresence>


      {/* step 2 */}
      <AnimatePresence>
        {
          step === 2 && <motion.div className='flex justify-center items-center gap-2 md:gap-4 my-4 overflow-hidden flex-wrap'
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}

          >
            {move.type == 'Storage' ?
              <div className='flex flex-row flex-wrap gap-4 justify-center'>
                <div onClick={() => setMove({ type: move.type, category: move.category, item: "25 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />25 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "50 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />50 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "75 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />75 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "100 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />100 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "125 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />125 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "150 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />150 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "200 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />200 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "225 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />225 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "250 Sqm" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />250 Sqm</div>

                <div onClick={() => setMove({ type: move.type, category: move.category, item: "250 Sqm +" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <FaWarehouse size={44} color="gray" />Above 250 sqm</div>



              </div>
              :
              <>
                <div onClick={() => setMove({ type: move.type, category: move.type == "domestic" ? "Appartment" : "Partial" })} className='p-2 w-32 md:w-52 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <MdOutlineVilla size={44} color="gray" />{move.type == "domestic" ? "Appartment" : "Partial Move"}</div>
                <div onClick={() => setMove({ type: move.type, category: move.type == "domestic" ? "Villa Move" : "Full Move" })} className='p-2 w-32 md:w-52 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
                  <BsBuilding size={44} color="gray" />{move.type == "domestic" ? "Villa Move" : "Full Move"}</div>
              </>
            }

          </motion.div>

        }
      </AnimatePresence>

      {/* step 3 */}

      <AnimatePresence>
        {
          step === 3 && <>

          {
            move.type === "office" & !move.item  ? setMove({type: move.type, category: move.category, item: "na"}) : 

           <motion.div className='flex justify-center items-center gap-2 md:gap-4 my-4 flex-wrap'
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div onClick={() => setMove({ type: move.type, category: move.category, item: "1 BHK" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <BiBed size={44} color="gray" />1 BHK</div>
            <div onClick={() => setMove({ type: move.type, category: move.category, item: "2 BHK" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <BiBed size={44} color="gray" />2 BHK</div>
            <div onClick={() => setMove({ type: move.type, category: move.category, item: "3 BHK" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <BiBed size={44} color="gray" />3 BHK</div>
            <div onClick={() => setMove({ type: move.type, category: move.category, item: "4 BHK" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <BiBed size={44} color="gray" />4 BHK</div>
            <div onClick={() => setMove({ type: move.type, category: move.category, item: "5 BHK" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <BiBed size={44} color="gray" />5 BHK</div>
            <div onClick={() => setMove({ type: move.type, category: move.category, item: "More than 5" })} className='p-2 w-22 md:w-32 shadow-sm bg-white rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-masterBlue-500 hover:text-white text-center'>
              <BiBed size={44} color="gray" />More</div>
          </motion.div>
          }

          </>
        }
      </AnimatePresence>


      {/* step 4 */}

      <AnimatePresence>
        {
          step === 4 && <motion.div className='flex justify-center items-center gap-2 md:gap-4 my-4'
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <form onSubmit={handleSubmit((data) => setMove({ type: move.type, category: move.category, item: move.item, ...data }))} className='flex flex-col gap-2 md:gap-4 bg-white p-4 w-full'>

              <div className="relative w-full">
                <input type="text" {...register('movingfrom', { required: true })} id="txtmFrom" className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="txtmFrom" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Moving from</label>
                {errors.movingfrom && <p className='text-red-500 textsm'>Moving from is required.</p>}
              </div>

              <div className="relative w-full">
                <input type="text" {...register('movingto', { required: true })} id="txtmTo" className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="txtmTo" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Moving to</label>
                {errors.movingto && <p className='text-red-500 textsm'>Moving To is required.</p>}
              </div>

              <div className="relative w-full">
                <input type="date" {...register('date', { required: true })} id="txtDate" className="block px-2.5 pb-2.5 pt-4 bg-white border  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="txtDate" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Moving Date</label>
                {errors.date && <p className='text-red-500 textsm'>Moving Date is required.</p>}
              </div>
              <button className='bg-blue-600 p-2 text-white hover:bg-orange-400 rounded-md w-full'>Save</button>
            </form>
          </motion.div>

        }
      </AnimatePresence>

      {/* step 5 */}

      <AnimatePresence>
        {
          step === 5 && <motion.div className='flex justify-center items-center gap-2 md:gap-4 my-4'
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Signup data={move} />
          </motion.div>

        }

        <div className='flex gap-4 justify-center p-4 '>
          <IoIosArrowBack onClick={() => setStep(step <= 1 ? 1 : step - 1)} className='bg-masterBlue-500 cursor-pointer rounded-full text-3xl' color='gray' />
          <p>Step {step} of 5</p>
          <IoIosArrowForward onClick={() => setStep(step >= 5 ? 5 : step + 1)} className='bg-masterBlue-500 cursor-pointer rounded-full text-3xl' color='gray' />
        </div>

      </AnimatePresence>

    </div>
  )
}

export default Booking