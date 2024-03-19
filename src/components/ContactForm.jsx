import React from 'react'

const ContactForm = () => {

  return (
    <div className='flex w-[50%] mx-auto mb-72 text-[#333] items-start'>
        <form id="form" className='bg-indigo-400 rounded-lg flex flex-col items-center mx-auto p-[2rem] w-[90%]'>
            <div className="p-[1rem] flex flex-col w-[90%]">
                <label for="from_name" className='font-bold'>Name</label>
                <input type="text" name="from_name" id="from_name" className='h-[2rem] rounded-md max-w-[15rem]' />
            </div>
            <div className="p-[1rem] flex flex-col w-[90%]">
                <label for="reply_to" className='font-bold'>Email</label>
                <input type="text" name="reply_to" id="reply_to" className='h-[2rem] rounded-md max-w-[15rem]' />
            </div>
            <div className="p-[1rem] flex flex-col w-[90%]">
                <label for="message" className='font-bold'>Message</label>
                <input type="text" name="message" id="message" className='h-[6rem] rounded-md' />
            </div>

            <input type="submit" id="button" value="Send Email" className='font-bold bg-indigo-200 hover:bg-orange-500 hover:text-white duration-150 hover:cursor-pointer rounded-lg p-4' />
        </form>
    </div>
  )
}

export default ContactForm