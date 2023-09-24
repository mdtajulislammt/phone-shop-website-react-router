import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Header/Phones/Phones";
import useGetPhones from "../../Hook/useGetPhones";


const Home = () => {

     const [phones] = useGetPhones() ;

     return (
          <div>
              <Banner></Banner>
              <Phones phones={phones}></Phones>
          </div>
     );
};

export default Home;