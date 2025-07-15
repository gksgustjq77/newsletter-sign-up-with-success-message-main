import { createBrowserRouter } from "react-router-dom";
import StayUpdate from "../pages/stay-update";
import Complete from "../pages/complete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StayUpdate />,
    errorElement: <></>,
  },
  {
    path: "complete/",
    element: <Complete />,
    errorElement: <></>,
  },
]);

export default router;
