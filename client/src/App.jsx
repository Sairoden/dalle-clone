// LIBRARIES
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import { Home, CreatePost } from "./pages";

// UI COMPONENTS
import { Header } from "./ui";

function App() {
  const router = createBrowserRouter([
    {
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/create-post",
          element: <CreatePost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
