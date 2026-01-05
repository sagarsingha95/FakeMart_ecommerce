import { useSelector } from "react-redux";
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const Items = () => {
  const { filteredProducts, products } = useSelector(
    (state) => state.products
  );

  const navigate = useNavigate();

  function handleItem(id) {
    navigate(`/products/${id}`);
  }

  // ✅ When filters applied but nothing matches
  if (filteredProducts.length === 0 && products.length > 0) {
    return (
      <p className="text-center text-xl text-gray-500 mt-10">
        No products available
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-3 cursor-pointer">
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          onClick={() => handleItem(item.id)}
          className="p-3 flex flex-col justify-evenly items-center h-60 hover:shadow-2xl border-2 border-gray-400 rounded-2xl hover:scale-[0.95] transition-all"
        >
          <img
            src={item.image}
            className="h-[100px] w-auto object-contain"
            loading="lazy"
          />
          <h1 className="font-bold text-center text-[12px]">
            {item.title}
          </h1>
          <p className="text-sm">${item.price}</p>
          <p className="flex items-center gap-1 font-bold">
            <IoStarSharp color="gold" />
            {item.rating.rate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Items;
