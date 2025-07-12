import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
// flex sm:flex-col items-stretch justify-center sm:rounded-none bg-white lg:rounded-[20px] overflow-hidden shadow-md
