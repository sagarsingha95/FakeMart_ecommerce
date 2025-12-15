import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from '../Loading/Loading'

const Orders = () => {
  const { currentuser } = useSelector((state) => state.users);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const randomDate = Math.floor(Math.random()*10);
  const randomMonth = Math.floor(Math.random()*10)

  useEffect(() => {
    if (!currentuser) return;

    async function fetchOrders() {
      try {
        // 1️⃣ Fetch carts (orders) of user
        const res = await fetch(
          `https://fakestoreapi.com/carts/user/${currentuser.id}`
        );
        const carts = await res.json();

        // 2️⃣ Fetch products for each cart
        const detailedOrders = await Promise.all(
          carts.map(async (cart) => {
            const products = await Promise.all(
              cart.products.map(async (item) => {
                const productRes = await fetch(
                  `https://fakestoreapi.com/products/${item.productId}`
                );
                const product = await productRes.json();

                return {
                  ...product,
                  quantity: item.quantity,
                };
              })
            );

            return {
              id: cart.id,
              date: cart.date,
              products,
            };
          })
        );

        setOrders(detailedOrders);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [currentuser]);

  if (loading) {
    return <Loading />
  }

  if (orders.length === 0) {
    return (
      <p className="text-center mt-10 text-lg">
        No orders found 🛒
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="border rounded-lg p-4 mb-6 shadow"
        >
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <p>Order ID: {order.id}</p>
            <p>{new Date(order.date).toLocaleDateString()}</p>
          </div>

          {order.products.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b py-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />

              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between font-bold mt-4">
            <p>Total</p>
            <p>
              $
              {order.products
                .reduce(
                  (sum, item) =>
                    sum + item.price * item.quantity,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
        </div>
      ))}
      <p className="text-2xl font-bold">The items will be deliverd on {randomDate}/{randomMonth}/2026  on {currentuser?.address.city},{currentuser?.address.street}, Ph:{currentuser?.phone}</p>
    </div>
  );
};

export default Orders;
