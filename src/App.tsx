import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayaout from "./layaout/default/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayaout>
                <HomePage />
            </DefaultLayaout>
        ),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
