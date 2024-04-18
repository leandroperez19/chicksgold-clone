import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/default/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import ApplicationContext from "./context/app.context";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout>
                <HomePage />
            </DefaultLayout>
        ),
    },
]);

function App() {
    return <ApplicationContext><RouterProvider router={router} /></ApplicationContext>;
}

export default App;
