import React,{useContext, useState} from 'react';
import StepComponent from './StepComponent'
export default function MyComponent() {
  const [formdData, setFormdata] = useState({
    name: '',
    email:'',
    password: '',
    cnfPassword: ''
  })
  
  const MyContext = React.createContext();
  const value = useContext(MyContext);
  return (
    <MyContext.Provider value={formdData}>
      <StepComponent />
    </MyContext.Provider>
  );
}



select Max(column1),Max(column2), Max(column3) from table where

