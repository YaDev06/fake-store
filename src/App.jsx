import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import { getProducts } from './fetching';
import ByCategory from "./Components/ByCategory";
import ByProductsId from "./Components/ByProductsId";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import ModalList from "./Components/ModalList";
import CommentList from "./Components/CommentList";
import { getData } from "./redux/reducers/products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((data) =>
      dispatch(getData(data))
    );
  }, []);

  const { modal } = useSelector((state) => state.products);

  return (
    <>
      <Navbar />
      <Cart />
      {modal && <ModalList />}
      <Routes>
        <Route index path="/" element={<Product />} />
        <Route path="/category/:category" element={<ByCategory />} />
        <Route path="/:id" element={<ByProductsId />} />
        <Route path="/comments" element={<CommentList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
