import { IMG_CARD } from "../utils";

const Card = ({ cloudinaryImageId, name, cuisines, lastMileTravel }) => {
    return (
      <div className="card">
        <img style={{ width: "200px" }} src={ IMG_CARD +
          cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravel.toFixed(2)} minutes</h4>
      </div>
    )
  }

  export default Card;