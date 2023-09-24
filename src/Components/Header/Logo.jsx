import { Link } from "react-router-dom";

const Logo = () => {
     return (
          <div>
               <Link to={"/"}><h1 className="text-2xl font-bold  cursor-pointer">Phone Shop</h1></Link>
          </div>
     );
};

export default Logo;