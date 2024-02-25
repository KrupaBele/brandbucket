import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllNames } from "../store/appSlice";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNames());
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
