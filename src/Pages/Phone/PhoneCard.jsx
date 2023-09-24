import Rating from "react-rating";
import swal from "sweetalert";
import PropTypes from 'prop-types';


const PhoneCard = ({phone}) => {
     const { id, phone_name, brand_name, rating, price, image } = phone || {};

     const handleAddToFavorites=()=>{
          const addedfavoritesArray = []
          const favoritesItems = JSON.parse(localStorage.getItem('favorites'))

          if(!favoritesItems){
               addedfavoritesArray.push(phone);
               localStorage.setItem('favorites',JSON.stringify(addedfavoritesArray))
               swal("Good job!", "Product Added Successfully!", "success");
          }else{
               const isExits = favoritesItems?.find(phone=>phone.id === id)
               if(!isExits){
                  addedfavoritesArray.push(...favoritesItems,phone);
               localStorage.setItem('favorites',JSON.stringify(addedfavoritesArray)) 
               swal("Good job!", "Product Added Successfully!", "success"); 
               }else{
                    swal("Error!", "No Duplicate!", "error");
               }

               
          }

          
     }
     return (
          <div className=" flex justify-center items-center">
              <div className="relative flex max-w-[40rem] border mt-32 border-green-400 flex-row rounded-xl  bg-clip-border text-gray-700 shadow-lg shadow-green-300">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="Phone"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-xl font-semibold uppercase leading-relaxed tracking-normal text-green-500 antialiased">
      {brand_name}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {phone_name}
    </h4>
    <h4 className="mb-2 block font-sans text-xl text-gray-500 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     $ {price}
    </h4>
    <p className="block font-sans text-sm font-normal leading-normal text-[#FFD700]  antialiased ">
    <Rating 
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={rating}
              readonly
            />
      
    </p>
   
    <a className="inline-block" href="#">
      <button
      onClick={handleAddToFavorites}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle mt-5 font-sans text-xs font-bold uppercase text-white hover:text-black transition-all bg-green-500 hover:bg-green-400 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add to favorites
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          // stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            // stroke-linecap="round"
            // stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
          </div>
     );
};

PhoneCard.propTypes = {
  phone: PropTypes.object
};

export default PhoneCard;