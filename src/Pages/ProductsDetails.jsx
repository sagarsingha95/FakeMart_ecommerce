import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addItem } from "../features/cartSlice";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quant, setQuant] = useState(1);

  const { isLoggedIn } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading product...</p>
      </div>
    );
  }

  function handleAddToCart() {
    if (!isLoggedIn) {
      alert("Please Log In first");
      navigate("/login");
      return;
    }

    // ✅ ADD PRODUCT TO REDUX CART
    dispatch(
      addItem({
        product,
        quantity: quant,
      })
    );

    // ✅ GO TO CHECKOUT
    navigate("/checkout");
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-72 h-72 object-contain rounded-xl shadow-lg p-4 bg-white"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>

          <p className="text-gray-600 text-sm mb-4 capitalize">
            Category: <span className="font-semibold">{product.category}</span>
          </p>

          {/* Rating */}
          <p className="flex items-center gap-2 mb-3">
            <span className="text-yellow-500 text-xl">⭐</span>
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count} reviews)
            </span>
          </p>

          {/* Price */}
          <p className="text-3xl font-bold text-green-600 mb-5">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <select
              className="p-2 border-2"
              value={quant}
              onChange={(e) => setQuant(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
