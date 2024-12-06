import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppToasty() {
    const notify = () => {
        // toast("This is a toast notification!");
        // toast.success("Form submitted successfully!");
        // toast.error("Something went wrong. Please try again!");
        // toast.info("New updates are available!");
        // toast.warn("Your session is about to expire!");
        // toast.info("No progress bar", { hideProgressBar: true });
        // toast("Custom Icon", { icon: "🔥" });
        // toast("Bounce Animation", { transition: Bounce });
        // toast.info("Click me!", { onClick: () => alert("Toast clicked!") });
        toast.success("Success!", { onClose: () => console.log("Toast closed") });
    }

   

  return (
    <div>
      <h1>ReactToastify Example</h1>
    
      <button onClick={notify}>Show Notification</button>
      <ToastContainer position="bottom-left"/>
    </div>
    
  )
}

export default AppToasty