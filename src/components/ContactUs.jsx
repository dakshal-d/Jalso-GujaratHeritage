import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m2uv4y3', 'template_rbddve5', form.current, 'pU2Br9ZpJz-XjRLTv')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message');
      });
    form.current.reset();
  };

  return (
    <div className='my-32'>
      <div className="flex justify-center font-semibold text-3xl text-orange-500 mx-80 p-1.5 rounded-3xl bg-gray-800">Contact Us</div>

    <div className="bg-gray-100 mx-40 flex justify-center rounded-xl pt-8"> 
         
      <section className="mb-24 text-gray-900">      
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            
            <p className="text-gray-900 mb-6">
              We're here to help. Whether you have a question about our Information or services,
              or just want to say hello, we'd love to hear from you. You can reach us using any
              of the following methods:
            </p>
            <p className="text-gray-700 mb-2">Surat, Gujarat</p>
            <p className="text-gray-700 mb-2">dakshaldalsania59@gmail.com</p>
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" id="exampleInput7"
                  placeholder="Name" name="name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" id="exampleInput8"
                  placeholder="Email address" name="email"/>
              </div>
              <div className="form-group mb-6">
                <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message" name="text"></textarea>
              </div>

              <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-orange-500
            text-white
            leading-tight
            rounded-3xl
            shadow-md
            hover:bg-orange-600 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
            <ToastContainer />
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default ContactUs
