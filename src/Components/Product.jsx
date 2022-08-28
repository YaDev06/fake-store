import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./UI/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { star } from "../otherFunctions";
import { getOrderedItem } from "../redux/slices/orderSlice";

const Product = () => {
  const products = useSelector((state) => state.productSlice.products);
  const dispatch = useDispatch();

  const addToCart = () => {
    toast.success("The item is added to cart ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const putOrder = (image, title, price) => {
    axios
      .post("http://localhost:3000/order", {
        image,
        title,
        price,
      })
      .then((res) => {
        dispatch(getOrderedItem(res.data));
        addToCart();
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="content container">
        {products.length ? (
          products.map((product) => (
            <div
              className="card my-4 p-4 text-center"
              style={{ width: "17rem" }}
              key={product.id}
            >
              <div className="image" style={{ position: "relative" }}>
                <img
                  src={product.image}
                  style={{ height: "18rem" }}
                  className="card-img-top border-bottom pb-3"
                  alt="..."
                />
                <div className="icons">
                  <div className="dflex">
                    <button
                      onClick={() => {
                        putOrder(product.image, product.title, product.price);
                      }}
                      className="btn btn-info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart-plus text-white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p>{star(product.rating.rate)}</p>
                <p className="card-text">{`$${Math.ceil(product.price)}`}</p>
                <p className="text-muted">{product.category}</p>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <Link
                  to={`/category/${product.category}`}
                  className="btn btn-success"
                >
                  Category
                </Link>
                <Link to={`/${product.id}`} className="btn btn-primary">
                  More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Product;
