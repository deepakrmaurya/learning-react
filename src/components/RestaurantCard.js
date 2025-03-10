import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{resData.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
