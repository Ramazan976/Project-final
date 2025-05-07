import { useState } from "react"


const StarRating = ({ totalStars = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleClick = (value) => {
        setSelectedStars(value);
    };

    return (
        <div className="flex font-bold">
        {[...Array(totalStars)].map((_, index) => {
            const starValue = index + 1;
            return (
                <span
                key={index}
                onClick={() => handleClick(starValue)}
                className={`cursor-pointer text-1xl transition-colors duration-200 ${ 
                    starValue <= selectedStars ? "text-yellow-400" : "text-gray-400"
                }`}
                >
                ★
                </span>
            );
        })}
        </div>
    )
}
export default StarRating;