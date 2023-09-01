import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteBoundary from "./routes/RouteBoundary";
import { route } from "./routes/routes";
import { Provider } from "react-redux";
import store from "./utils/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {route.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<RouteBoundary />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
