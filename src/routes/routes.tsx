import { createBrowserRouter } from "react-router-dom";
import StayUpdate from "../pages/stay-update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StayUpdate />,
    errorElement: <></>,
  },
]);

export default router;
