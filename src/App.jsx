import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  FixedSizeList,
  FixedSizeGrid,
  VariableSizeList,
  VariableSizeGrid,
  ScrollingIndicator,
  ScrollingToItem,
  MemorizedContainer,
  AttachEventHandler,
  FilledSizeList,
  InfiniteLoadingList,
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fixedSizeList",
      element: <FixedSizeList />,
    },
    {
      path: "/variableSizeList",
      element: <VariableSizeList />,
    },
    {
      path: "/fixedSizeGrid",
      element: <FixedSizeGrid />,
    },
    {
      path: "/variableSizeGrid",
      element: <VariableSizeGrid />,
    },
    {
      path: "/scrollingIndicator",
      element: <ScrollingIndicator />,
    },
    {
      path: "/scrollingToItem",
      element: <ScrollingToItem />,
    },
    {
      path: "/memorizedListItems",
      element: <MemorizedContainer />,
    },
    {
      path: "/attachEventHandler",
      element: <AttachEventHandler />,
    },
    {
      path: "/filledSizeList",
      element: <FilledSizeList />,
    },
    {
      path: "/infiniteLoadingList",
      element: <InfiniteLoadingList />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
