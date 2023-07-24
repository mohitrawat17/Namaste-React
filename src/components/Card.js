import { IMG_CARD } from "../utils";

const Card = ({ cloudinaryImageId, name, cuisines, lastMileTravel }) => {
    return (
      <div className="mb-7 w-52 h-56 mx-5 hover:scale-95 transition-transform duration-200">
        <img className="h-36 rounded-3xl" src={ IMG_CARD +
          cloudinaryImageId} />
        <h2 className="pb-1 font-semibold px-3 text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</h2>
        <h3 className="pb-1 px-3 whitespace-nowrap overflow-hidden overflow-ellipsis">{cuisines.join(", ")}</h3>
        <h4 className="pb-1 px-3 text-[15px] font-medium">{lastMileTravel.toFixed(2)} minutes</h4>
      </div>
    )
  }

  export default Card;