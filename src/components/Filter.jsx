// components/Filters.jsx
import { useDispatch} from "react-redux";
import { useState } from "react";
import { FILTER_BY_PRICE, FILTER_BY_RATING } from "../features/productsSlice";

const Filters = () => {
  const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);

  // Local UI states
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(1);

  function handlePriceChange() {
    dispatch(FILTER_BY_PRICE({ minPrice, maxPrice }));
  }

  function handleRatingChange(e) {
    const selectedRating = Number(e.target.value);
    setRating(selectedRating);
    dispatch(FILTER_BY_RATING(selectedRating));
  }

  return (
    <div className="bg-gray-700 p-5  shadow-md space-y-6 md:h-full text-white w-screen md:w-full">
      <h3 className="text-2xl font-bold">Filters</h3>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold mb-2">Price Range</h4>

        <div className="flex items-center gap-3">
          <span>Min: ${minPrice}</span>
          <input
            type="range"
            min="0"
            max="2000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            onMouseUp={handlePriceChange}
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-3 mt-2">
          <span>Max:${maxPrice}</span>
          <input
            type="range"
            min="0"
            max="2000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            onMouseUp={handlePriceChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h4 className="font-semibold mb-2">Rating</h4>
        <select
          value={rating}
          onChange={handleRatingChange}
          className="p-2 rounded-md border border-gray-400 text-black"
        >
          <option value="1">1 ★ & above</option>
          <option value="2">2 ★ & above</option>
          <option value="3">3 ★ & above</option>
          <option value="4">4 ★ & above</option>
          <option value="5">5 ★ only</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
