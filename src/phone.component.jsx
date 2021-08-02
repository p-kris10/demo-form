import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { useState } from 'react';



const Phone = ({getPhone}) => {
  const [value,setValue] = useState();

  return (
    
  
      <PhoneInput
        country={'in'}
        value={value}
        onChange={phone => getPhone(phone)}
        containerStyle={{width:"100%"}}
        inputStyle={{border: "2px solid #979797",
        boxSizing: "border-box",
    borderRadius: "10px",
    height: "7vh",width:"100%"}}
      />
  )
}

export default Phone;
