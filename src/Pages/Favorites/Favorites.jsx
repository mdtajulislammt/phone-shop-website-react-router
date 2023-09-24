import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";
import { Link } from "react-router-dom";


const Favorites = () => {
     const [favorites, setFavorites] = useState();
     const [noFound, setNoFound] = useState("");
     const [isShow, setIsShow] = useState(false);
     const [totalPrice,setTotalPrice] = useState(0);

     
     useEffect(()=>{
          const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
          if(favoritesItems){
               setFavorites(favoritesItems);
               const total = favoritesItems.reduce((preValue,currentItem)=>preValue+currentItem.price,0)
               const totalToFixed = total.toFixed(2)
               setTotalPrice(totalToFixed)
          }else{
               setNoFound('No Data Found')
          }
          
     },[])
     const handleRemoveItem=()=>{
          localStorage.clear();
          setFavorites([]);
          setNoFound('No Data Found')

     }
     return (
          <div>
          
               
               {noFound ? <div className="h-[80vh] flex justify-center items-center text-center">
                    <div>
                    <p className="  text-2xl mb-8 ">{noFound} . . . ! ! !</p>
                    
                    <Link to={'/'}>
    <button
      className=" px-5 py-3  text-sm font-medium text-white hover:text-black bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring"
    >
      Go Back Home
    </button>
    </Link>
                    </div>
               </div>
                : 
               <div>
                {favorites?.length > 0 && <div>
                    <button onClick={handleRemoveItem} className=" px-5 bg-green-500 hover:bg-green-400 block mx-auto rounded-md p-2 mb-6 font-semibold text-white hover:text-black">Deleted All Favorites</button>
                    <h2 className=" block text-2xl border border-green-500 p-2 bg-green-500 text-white text-center rounded-md mb-6 font-semibold">Total Price: $ {totalPrice}</h2>
                    </div>} 
               <div className=" grid grid-cols-2 gap-5">

               {isShow ? 
               favorites?.map(phone=><FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
               : 
               favorites?.slice(0,4).map(phone=><FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)}

               </div>
               {favorites?.length > 4 &&  <button onClick={()=>setIsShow(!isShow)} className=" px-10 mt-7 bg-green-600 hover:bg-green-400 block mx-auto rounded-md p-2 mb-6 font-semibold text-white hover:text-black">{isShow ? "See Less": "See More"}</button>}
               </div> }
          </div>
     );
};

export default Favorites;