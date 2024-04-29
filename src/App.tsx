import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/default/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import ApplicationContext from "./context/app.context";
import ItemsPage from "./pages/ItemsPage/ItemsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <DefaultLayout>
                <HomePage />
            </DefaultLayout>
        ),
    },
    {
        path: "/items/",
        element: (
            <DefaultLayout>
                <ItemsPage />
            </DefaultLayout>
        ),
    },
    // {
    //     path: "/items/:game",
    //     element: (
    //         <DefaultLayout>
    //             <ItemsPage />
    //         </DefaultLayout>
    //     ),
    // },
]);

function App() {
    return <ApplicationContext><RouterProvider router={router} /></ApplicationContext>;
}

export default App;
