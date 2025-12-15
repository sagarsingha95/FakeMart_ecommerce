import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { checkoutCart, clearCart } from "../features/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  /* ✅ USER STATE */
  const { currentuser, isLoggedIn } = useSelector(
    (state) => state.users
  );
      useEffect(()=>{
    console.log(currentuser);
  },[currentuser])

  /* ✅ CART STATE */
  const { items, loading } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (!isLoggedIn) {
      alert('Login first');
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (loading) {
    return <p className="text-center mt-10">Placing order...</p>;
  }

  if (items.length === 0) {
    return <p className="text-center mt-10 h-[60vh]">Your cart is empty <br/> <span className="text-blue-700 hover:underline hover:cursor-pointer" onClick={()=>navigate('/')}>Back to Home</span> </p>;
  }

  /* ✅ PLACE ORDER */
function handlePlaceOrder() {
  dispatch(
    checkoutCart({
      userId: currentuser.id,
      items,
    })
  )
    .unwrap()
    .then(() => {
      alert("Order placed successfully 🎉");
      navigate("/orders");
    })
    .catch((err) => {
      alert(err);
    });
}



  return (
    <div className="max-w-4xl mx-auto p-6 h-screen">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* USER INFO */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        <p>User ID: {currentuser?.name.firstname}</p>
        <p>Email: {currentuser?.email}</p>
      </div>

      {/* CART SUMMARY */}
      <div className="border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2"
          >
            <p>{item.title}</p>
            <p>Qty: {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}

        {/* TOTAL */}
        <div className="flex justify-between font-bold mt-4">
          <p>Total</p>
          <p>
            $
            {items
              .reduce(
                (total, item) =>
                  total + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      </div>

      {/* PLACE ORDER */}
      <div className="flex gap-3 rounded">
        <button
        onClick={handlePlaceOrder}
        className="w-full bg-green-600 text-white py-3 rounded text-lg hover:bg-green-700">
        Place Order
      </button>
      <button className="py-3 bg-red-500 w-full" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>

    </div>
  );
};

export default Checkout;
