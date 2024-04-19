import { useContext } from "react";
import {CDN_URL} from "./utils/constants"; 
import userContext from "./utils/UserContext";
import { useDispatch } from "react-redux";
import { addItems } from "./utils/CartSlice";
const RestaurantCard = (props) => {
    const {resData} = props;
//   console.log(resData);
  const {loggedInUser} = useContext(userContext);
  // console.log(loggedInUser);
// Destructuring it on fly
const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,promoted} = resData?.card?.card?.info;
const {deliveryTime} = resData?.card?.card?.info?.sla;
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(addItems("Pizza"))
  }
  return (
    <div className="res-card m-4 p-4 w-[220px] h-[450px] bg-blue-50 hover:bg-blue-200 transition cursor-pointer">
      <img className="res-logo rounded-xl w-[200px] h-[140px]"  src={CDN_URL+cloudinaryImageId}/>
      <h3 className="text-xl font-bold my-2"> {name} </h3>
      <h4 > {cuisines.join(" , ")} </h4>
      <h5> Rating of : {avgRating} </h5>
      <h5 className="font-bold"> {costForTwo} </h5>
      <h5 className="font-bold"> {deliveryTime} mins </h5>
      <h5 className="">User: {loggedInUser} </h5>
      <button className="bg-blue-700 px-5 py-1 rounded-md mt-[10px]" onClick={handleCart}>Add to Cart</button>
    </div>
  );
};


// Higher order component :- which takes a component as a input parameter and returns a camponent 
// (it the inhances the properties of input component and return the inhanced component).

export const withPromtedLabel = (RestaurantCard) => {
  return(props) => {
    return (
      <div>
        <label className="ml-5 px-5  absolute text-lg text-white bg-black rounded-xl">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;