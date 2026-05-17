import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  signOut
} from "firebase/auth";

import { auth }
from "../services/firebase";

import {
  useNavigate
} from "react-router-dom";

function AdminDashboard({ onLogout }) {

  const [rooms, setRooms] =
    useState([]);

  const [showForm, setShowForm] =
    useState(false);

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [vacantRooms, setVacantRooms] =
    useState("");

  const [takenRooms, setTakenRooms] =
    useState(0);

  const [bedrooms, setBedrooms] =
    useState(1);

  const [internet, setInternet] =
    useState(true);

  const [features, setFeatures] =
    useState("");

  const [image, setImage] =
    useState("");

  const navigate =
    useNavigate();

  const fetchRooms =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:3001/products"
          );

        setRooms(
          response.data
        );

      } catch (error) {

        console.log(
          error.message
        );
      }
    };

  // FETCH ROOMS
  useEffect(() => {
    const loadRooms = async () => {
      await fetchRooms();
    };

    loadRooms();
  }, []);

  // UPDATE PRICE
    const updatePrice =
    async (id, value) => {

        // UPDATE UI FIRST
        setRooms((prevRooms) =>

        prevRooms.map((room) =>

            room.id === id
            ? {
                ...room,
                price:
                    Number(value)
                }
            : room
        )
        );

        // UPDATE DB.JSON
        try {

        await axios.patch(
            `http://localhost:3001/products/${id}`,
            {
            price:
                Number(value)
            }
        );

        } catch (error) {

        console.log(error);
        }
    };

  // UPDATE QUANTITY
const updateVacantRooms =
    async (id, value) => {

        setRooms((prevRooms) =>

        prevRooms.map((room) =>

            room.id === id
            ? {
                ...room,
                vacantRooms:
                    Number(value)
            }
            : room
        )
        );

        try {

        await axios.patch(
            `http://localhost:3001/products/${id}`,
            {
            vacantRooms:
                Number(value)
            }
        );

        } catch (error) {

        console.log(error);
        }
    };

    const updateTakenRooms =
    async (id, value) => {

        setRooms((prevRooms) =>

        prevRooms.map((room) =>

            room.id === id
            ? {
                ...room,
                takenRooms:
                    Number(value)
            }
            : room
        )
        );

        try {

        await axios.patch(
            `http://localhost:3001/products/${id}`,
            {
            takenRooms:
                Number(value)
            }
        );

        } catch (error) {

        console.log(error);
        }
    };

    const updateBedrooms =
    async (id, value) => {

        setRooms((prevRooms) =>

        prevRooms.map((room) =>

            room.id === id
            ? {
                ...room,
                bedrooms:
                    Number(value)
            }
            : room
        )
        );

        try {

        await axios.patch(
            `http://localhost:3001/products/${id}`,
            {
            bedrooms:
                Number(value)
            }
        );

        } catch (error) {

        console.log(error);
        }
    };

    const updateInternet =
    async (id, value) => {

        setRooms((prevRooms) =>

        prevRooms.map((room) =>

            room.id === id
            ? {
                ...room,
                internet:
                    value === "true"
            }
            : room
        )
        );

        try {

        await axios.patch(
            `http://localhost:3001/products/${id}`,
            {
            internet:
                value === "true"
            }
        );

        } catch (error) {

        console.log(error);
        }
    };

    const updateFeatures =
    async (id, value) => {

        const featureList = value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);

        setRooms((prevRooms) =>

        prevRooms.map((room) =>

            room.id === id
            ? {
                ...room,
                features:
                    featureList
            }
            : room
        )
        );

        try {

        await axios.patch(
            `http://localhost:3001/products/${id}`,
            {
            features:
                featureList
            }
        );

        } catch (error) {

        console.log(error);
        }
    };

  // DELETE
    const deleteRoom =
    async (id) => {

        // REMOVE FROM UI
        setRooms((prevRooms) =>

        prevRooms.filter(
            (room) =>
            room.id !== id
        )
        );

        // REMOVE FROM DB
        try {

            await axios.delete(
                `http://localhost:3001/products/${id}`
            );

            // notify other pages to refresh products (include id for delete)
            try {
              window.dispatchEvent(new CustomEvent("productsUpdated", { detail: { action: "delete", id } }));
            } catch (err) {
              console.log("dispatch error", err);
            }

        } catch (error) {

        console.log(error);
        }
    };

  // ADD ROOM
    const addRoom =
    async (e) => {

        e.preventDefault();

        const newRoom = {

        id: Date.now(),

        name,

        price:
            Number(price),

        vacantRooms:
            Number(vacantRooms),

        takenRooms:
            Number(takenRooms),

        bedrooms,

        internet,

        features: features
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        image
        };

        // UPDATE UI IMMEDIATELY
        setRooms((prevRooms) => [
        ...prevRooms,
        newRoom
        ]);

        // UPDATE DB.JSON
        try {

        await axios.post(
            "http://localhost:3001/products",
            newRoom
        );

        // notify other pages to refresh products (include new room data)
        try {
          window.dispatchEvent(new CustomEvent("productsUpdated", { detail: newRoom }));
        } catch (err) {
          console.log("dispatch error", err);
        }

        } catch (error) {

        console.log(error);
        }

        alert("Room Added!");

        // CLEAR FORM
        setName("");
        setPrice("");
        setVacantRooms("");
        setTakenRooms(0);
        setBedrooms(1);
        setFeatures("");
        setInternet(true);
        setImage("");

        setShowForm(false);
    };

  // LOGOUT
  const handleLogout =
    async () => {

      await signOut(auth);

      if (onLogout) {
        try {
          onLogout();
        } catch (err) {
          console.log(err);
        }
      }

      navigate(
        "/admin-login"
      );
    };

  return (

    <div className="p-8 bg-gray-100 min-h-screen">

      {/* TOP */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <div className="flex gap-4">

          {/* ADD BUTTON */}
          <button
            onClick={() =>
              setShowForm(
                !showForm
              )
            }
            className="bg-green-600 text-white px-5 py-2 rounded-lg text-xl"
          >
            +
          </button>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            logOut
          </button>

        </div>

      </div>

      {/* ADD ROOM FORM */}
      {showForm && (

        <form
        onSubmit={(e) => {
            e.preventDefault();
            addRoom(e);
        }}
         className="bg-white p-6 rounded-xl shadow-lg mb-8"
        >

          <h2 className="text-2xl font-bold mb-4">
            Add Room Type
          </h2>

          <input
            type="text"
            placeholder="Room Type Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <input
            type="number"
            placeholder="Price Per Night"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <input
            type="number"
            placeholder="Vacant Rooms"
            value={vacantRooms}
            onChange={(e) =>
              setVacantRooms(
                e.target.value
              )
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <input
            type="number"
            placeholder="Taken Rooms"
            value={takenRooms}
            onChange={(e) =>
              setTakenRooms(
                Number(e.target.value)
              )
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <input
            type="number"
            placeholder="Bedrooms"
            value={bedrooms}
            onChange={(e) =>
              setBedrooms(
                Number(e.target.value)
              )
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <input
            type="text"
            placeholder="Features (comma-separated)"
            value={features}
            onChange={(e) =>
              setFeatures(e.target.value)
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <select
            value={internet}
            onChange={(e) =>
              setInternet(e.target.value === "true")
            }
            className="border p-3 rounded-lg w-full mb-4"
          >
            <option value="true">
              Internet available
            </option>
            <option value="false">
              No internet
            </option>
          </select>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
            className="border p-3 rounded-lg w-full mb-4"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Add Room Type
          </button>
        </form>
      )}

      {/* ROOM TYPES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {rooms.length > 0 ? (

          rooms.map((room) => (

            <div
              key={room.id}
              className="bg-white p-4 rounded-xl shadow-lg"
            >

              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h2 className="text-2xl font-bold mt-4">
                {room.name}
              </h2>

              {/* PRICE */}
              <label className="font-semibold">
                Price Per Night
              </label>

              <input
                type="number"
                defaultValue={
                  room.price
                }
                onBlur={(e) =>
                  updatePrice(
                    room.id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg w-full mt-2 mb-4"
              />

              {/* VACANT ROOMS */}
              <label htmlFor={`vacant-rooms-${room.id}`} className="font-semibold">
                Vacant Rooms
              </label>

              <input
                id={`vacant-rooms-${room.id}`}
                type="number"
                defaultValue={
                  room.vacantRooms ?? room.quantity
                }
                onBlur={(e) =>
                  updateVacantRooms(
                    room.id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg w-full mt-2"
              />

              <p className="text-sm text-gray-500 mt-2">
                Available rooms shown here are editable and saved to the dashboard.
              </p>

              {/* TAKEN ROOMS */}
              <label className="font-semibold mt-4 block">
                Taken Rooms
              </label>

              <input
                type="number"
                defaultValue={
                  room.takenRooms ?? 0
                }
                onBlur={(e) =>
                  updateTakenRooms(
                    room.id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg w-full mt-2"
              />

              {/* BEDROOMS */}
              <label className="font-semibold mt-4 block">
                Bedrooms
              </label>

              <input
                type="number"
                defaultValue={room.bedrooms ?? 1}
                onBlur={(e) =>
                  updateBedrooms(
                    room.id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg w-full mt-2"
              />

              {/* FEATURES */}
              <label className="font-semibold mt-4 block">
                Features
              </label>

              <textarea
                defaultValue={
                  room.features ? room.features.join(", ") : ""
                }
                onBlur={(e) =>
                  updateFeatures(
                    room.id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg w-full mt-2 h-24 resize-none"
                placeholder="Free WiFi, Breakfast included"
              />

              <p className="text-sm text-gray-500 mt-2">
                Save features as comma-separated values.
              </p>

              {/* INTERNET */}
              <label className="font-semibold mt-4 block">
                Internet
              </label>

              <select
                defaultValue={
                  room.internet ? "true" : "false"
                }
                onChange={(e) =>
                  updateInternet(
                    room.id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg w-full mt-2"
              >
                <option value="true">
                  Internet available
                </option>
                <option value="false">
                  No internet
                </option>
              </select>

              {/* DELETE */}
              <button
                onClick={() =>
                  deleteRoom(
                    room.id
                  )
                }
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg w-full"
              >
                Remove Room
              </button>

            </div>
          ))

        ) : (

          <h1 className="text-2xl">
            No Room Types Found
          </h1>
        )}

      </div>

    </div>
  );
}

export default AdminDashboard;