import { createBrowserRouter } from "react-router-dom";

import { Board } from "../../pages/board";
import { Registration } from "../../pages/registration";
import { Main } from "../../pages/main";
import { MainLayout } from "../../components/main-layout";

const Router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/board",
                element: <Board />
            },
            {
                path: "/signin",
                element: <Registration />
            },
            {
                path: "/",
                element: <Main />
            }
        ]
    }
])

export default Router;