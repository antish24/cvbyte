import React, { createContext } from 'react';
import {message} from 'antd'
export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const openNotification = (title,description,time) => {
      messageApi.open({
        type: title,
        content:description,
        duration:time?time:4, 
      });
    };

  return (
    <AlertContext.Provider value={{openNotification}}>
      {children}{contextHolder}
    </AlertContext.Provider>
  );
};

export default AlertProvider;