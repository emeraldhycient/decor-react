import { useState } from "react";
import axios from "axios";
import Navbar from "../components/dashboard/navbar";
import Layout from "../components/layout";

import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitlogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_apiUrl}login`, {
        email,
        password,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user", response.data.user);
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <Navbar />
      <div className="w-11/12 md:w-4/12 mx-auto border-[.01rem] border-gray-200 p-2 mt-6 mb-4">
        <h1 className="text-lg text-center font-bold text-blue-300 mt-2 mb-4">
          Login
        </h1>
        <form onSubmit={submitlogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:-outline"
              type="submit"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </Layout>
  );
}

export default Login;
