import React from 'react'
import { ToastContainer } from 'react-toastify';

const Notification = () => {
  return (
    <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 
      
  )
}

export default Notification
