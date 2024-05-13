import React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export const Random = () => {
  const  Niranjan = () =>{
        return() => {
        NotificationManager.info('Info message');
    };
};
  return (
    <div>
        <button onClick={Niranjan()}>See</button>
        <NotificationContainer/>
    </div>
  )
}
