import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Names from "./pages/Names";
import ViewName from "./pages/ViewName";
import UserForm from "./pages/UserForm";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/all-names" element={<Names />} />
            <Route path="/all-names/:category/:names" element={<Names />} />
            <Route path="/all-names/:name" element={<ViewName />} />
            <Route
              path="/all-names/:category/:names/:name"
              element={<ViewName />}
            />

            <Route path="/user-form" element={<UserForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
