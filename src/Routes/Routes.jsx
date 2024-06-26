import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SingleService from "../pages/Home/SingleService/SingleService";
import About from "../pages/About/About";
import Skill from "../pages/Home/Skill/Skill";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "singleservice/:id",
        element: <SingleService></SingleService>,
        // loader: ({ params }) => fetch(`services.json/${params.id}`),
      },
      // {
      //   path: "aboutme",
      //   element: <AboutMe></AboutMe>,
      // },
      // {
      //   path: "skill",
      //   element: <Skill></Skill>,
      // },
    ],
  },
]);
