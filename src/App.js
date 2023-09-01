import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteBoundary from "./routes/RouteBoundary";
import { route } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<RouteBoundary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
