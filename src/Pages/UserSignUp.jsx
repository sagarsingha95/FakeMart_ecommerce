import React, { useState } from "react";
import { FiMail, FiLock, FiUser, FiMapPin } from "react-icons/fi";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useAddUsersMutation } from "../features/apiSlice";

const UserSignUp = ({ setLoged }) => {
  const [addUser, { isLoading }] = useAddUsersMutation();

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  /* ---------- HANDLE INPUT ---------- */
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /* ---------- SUBMIT ---------- */
  async function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const [firstname, ...rest] = form.fullname.split(" ");
    const lastname = rest.join(" ") || "User";

    /* FakeStore required payload */
    const payload = {
      email: form.email,
      username: form.email.split("@")[0],
      password: form.password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city: form.city,
        street: form.street,
        number: 1,
        zipcode: form.zip,
        geolocation: {
          lat: "0",
          long: "0",
        },
      },
      phone: "9999999999",
    };

    try {
      await addUser(payload).unwrap();
      alert("Account created successfully 🎉");
      setLoged(true);
    } catch (error) {
      console.error(error);
      alert("Signup failed. Try again.");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label className="font-semibold block mb-1">Full Name</label>
            <div className="flex items-center gap-2 border rounded-xl p-3">
              <FiUser className="text-gray-500" />
              <input
                type="text"
                name="fullname"
                required
                placeholder="John Doe"
                value={form.fullname}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="font-semibold block mb-1">Email</label>
            <div className="flex items-center gap-2 border rounded-xl p-3">
              <FiMail className="text-gray-500" />
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="font-semibold block mb-1">Password</label>
            <div className="flex items-center gap-2 border rounded-xl p-3">
              <FiLock className="text-gray-500" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                required
                placeholder="Create password"
                value={form.password}
                onChange={handleChange}
                className="w-full outline-none"
              />
              <span onClick={() => setShowPass(!showPass)} className="cursor-pointer">
                {showPass ? <IoEyeOff size={22} /> : <IoEye size={22} />}
              </span>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="font-semibold block mb-1">Confirm Password</label>
            <div className="flex items-center gap-2 border rounded-xl p-3">
              <FiLock className="text-gray-500" />
              <input
                type={showConfirmPass ? "text" : "password"}
                name="confirmPassword"
                required
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full outline-none"
              />
              <span
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="cursor-pointer"
              >
                {showConfirmPass ? <IoEyeOff size={22} /> : <IoEye size={22} />}
              </span>
            </div>
          </div>

          {/* ADDRESS */}
          <h3 className="text-xl font-semibold flex items-center gap-2 mt-6">
            <FiMapPin /> Address
          </h3>

          <input
            type="text"
            name="street"
            required
            placeholder="Street"
            value={form.street}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl outline-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              name="city"
              required
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
            />
            <input
              type="text"
              name="state"
              required
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
            />
            <input
              type="text"
              name="zip"
              required
              placeholder="Zip"
              value={form.zip}
              onChange={handleChange}
              className="border p-3 rounded-xl outline-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold hover:bg-green-700 disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setLoged(true)}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
