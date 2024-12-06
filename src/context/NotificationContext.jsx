import { useState, createContext } from "react";

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('');// Arranca como cadena vacia.
    const [severity, setSeverity] = useState('success');

    const setNotification = (sev, msg) => {
        setMessage(msg);
        setSeverity(sev);
        setTimeout(() => {
            setMessage('')
        }, 3000);
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity} />
            {children} 
        </NotificationContext.Provider>
    )
}

const Notification = ({ message, severity }) => {

    const background = {
        success: 'green',
        danger: 'red',
        warning: 'orange',
        default: 'blue'
    }

    const NotificationStyle = {
        position: 'absolute',
        top: 100,
        right: 100,
        padding: '20px',
        backgroundColor: background[severity] || background.default,
    }

    if (message === '') return

    return (
        <div style={NotificationStyle}>
            {message}
        </div>
    )

}

// export const useNotification = () => {
//     return useContext(NotificationContext);
// }

