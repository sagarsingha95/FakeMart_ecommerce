// components/Categories.jsx
import { FaMobileScreenButton } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { FaBorderAll } from "react-icons/fa6";
import { GiJewelCrown } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY_CATEGORY } from  '../features/productsSlice'

const categories = [
  {name:'All', color:'bg-gray-700' ,icon:<FaBorderAll size={40} />},
  { name: "Men's clothing", color: "bg-gray-700" ,icon:<IoIosMan size={30}/>},
  { name: "Women's clothing", color: "bg-gray-700", icon:<GiLargeDress size={30}/> },
  { name: "Jewelery", color: "bg-gray-700", icon:<GiJewelCrown size={30} /> },
  { name: "Electronics", color: "bg-gray-700" , icon:<FaMobileScreenButton size={30}/>},
];

const Categories = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleCategories(categ){
    if(categ === 'All'){
      dispatch(FILTER_BY_CATEGORY(products)); // Use the action creator
    }
    else{
      const filtered = products?.filter((item) => 
        item.category.toLowerCase() === categ.toLowerCase()
      );
      dispatch(FILTER_BY_CATEGORY(filtered)); // Use the action creator
    }
  }

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.color} rounded-xl p-4 text-white text-xl font-semibold hover:scale-105 transition shadow-lg flex flex-col justify-center items-center cursor-pointer`} // Added cursor-pointer
            onClick={()=>handleCategories(cat.name)}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;