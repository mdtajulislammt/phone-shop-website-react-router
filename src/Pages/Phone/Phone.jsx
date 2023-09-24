import { useParams } from "react-router-dom";
import useGetPhones from "../../Hook/useGetPhones";
import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";

const Phone = () => {
     const [phone,setPhones] = useState({});
     const {id} = useParams()
     const [phones] = useGetPhones() ;

     useEffect(()=>{
         const findPhone = phones?.find(phone=>phone.id === id);
         setPhones(findPhone);

     },[id,phones])
   
     
     return (
          <div>
             <PhoneCard phone={phone}></PhoneCard>
          </div>
     );
};

export default Phone;