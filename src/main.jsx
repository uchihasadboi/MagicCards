import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css'
import Home from './Home'
import MagicDecks from "./MagicDecks";
import YuGiOhDecks from "./YuGiOhDecks";
import PokemonDecks from "./PokemonDecks";
import HearthstoneDecks from "./HearthstoneDecks";
import InputDecks from "./InputDecks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "GamesList",
    element: <App/>,
  },
  {
    path: "MagicDecks",
    element: <MagicDecks/>,
  },
  {
    path: "YuGiOhDecks",
    element: <YuGiOhDecks/>,
  },
  {
    path: "PokemonDecks",
    element: <PokemonDecks/>,
  },
  {
    path: "HearthstoneDecks",
    element: <HearthstoneDecks/>,
  },
  {
    path: "InputDecks",
    element: <InputDecks/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);