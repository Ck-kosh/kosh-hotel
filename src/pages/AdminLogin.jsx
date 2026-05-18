import { useState } from "react";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth }
from "../services/firebase";

import AdminDashboard from "./AdminDashboard";

function AdminLogin() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [adminAuthenticated,
    setAdminAuthenticated] =
    useState(
      auth.currentUser?.email ===
      "thekosh12@gmail.com"
    );

  // LOGIN
  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        // FIREBASE LOGIN
        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

        const user =
          userCredential.user;

        // ADMIN CHECK
        if (
          user.email !==
          "thekosh12@gmail.com"
        ) {

          alert(
            "Only Admin Allowed"
          );

          return;
        }

        // SUCCESS
        setAdminAuthenticated(true);

      } catch (error) {

        console.log(
          error.code
        );

        console.log(
          error.message
        );

        alert(
          "Invalid Email or Password"
        );
      }
    };

  if (adminAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-2xl font-semibold">Logged in as Admin</h2>
            <p className="text-sm text-gray-600">You are signed in and can manage rooms.</p>
          </div>

          <AdminDashboard onLogout={() => setAdminAuthenticated(false)} />
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-95">

        <h1 className="text-4xl font-bold text-center mb-6">
          Admin Login
        </h1>

        
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg mb-6"
        />

        {/* BUTTON */}
        <button
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;