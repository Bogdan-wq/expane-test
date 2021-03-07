import { store } from 'react-notifications-component';

type MessageType = 'success' | 'warning' | 'default' | 'danger';

const addNotification = (message : string,type : MessageType) => {
    store.addNotification({
        title: "Expane test notification",
        message,
        type,
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
    });
}

export default addNotification;