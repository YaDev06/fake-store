import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getACategory } from "../fetching";
import Loader from "./UI/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { getOrderedItem } from "../redux/slices/orderSlice";
import { get_a_category } from "../redux/slices/categorySlice";

const ByCategory = () => {
  const addToCart = () => {
    toast.success("The item is added to cart ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const putOrder = (image, title, price) => {
    axios
      .post("http://localhost:3000/order/", {
        image,
        title,
        price,
      })
      .then((res) => {
        dispatch(getOrderedItem(res.data));
        addToCart();
      });
  };

  const { category } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const dispatch = useDispatch();
  const ByCategory = useSelector((state) => state.categorySlice.ByCategory);

  useEffect(() => {
    getACategory(category).then((data) => {
      dispatch(get_a_category(data));
    });
  }, [category]);

  return (
    <div className="content container">
      <ToastContainer />
      <button
        onClick={goBack}
        className="goBack btn btn-danger"
      >{`<-- Back`}</button>
      {ByCategory.length ? (
        ByCategory.map((product) => (
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
                    onClick={() =>
                      putOrder(product.image, product.title, product.price)
                    }
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
              <p className="card-text">{`$${Math.ceil(product.price)}`}</p>
              <p className="text-muted">{product.category}</p>
            </div>
            <div className="card-footer d-flex justify-content-around">
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
  );
};

export default ByCategory;
