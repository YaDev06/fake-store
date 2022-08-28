import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getACategory, getProductById } from "../fetching";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loader from "./UI/Loader/Loader";
import Error from "./UI/Error/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { get_product_by_id } from "../redux/slices/idProductSlice";
import { getOrderedItem } from "../redux/slices/orderSlice";
import {
  addComment,
  get_name,
  get_comment,
} from "../redux/slices/commentSlice";
import { get_a_category } from "../redux/slices/categorySlice";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import "swiper/css/autoplay";

const ByProductsId = () => {
  const [showCategory, setShowCategory] = useState(false);

  // react-router-dom start

  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // react-router-dom end

  // redux start

  const dispatch = useDispatch();
  const ByProductsId = useSelector(
    (state) => state.idProductSlice.ByProductsId
  );
  const name = useSelector((state) => state.commentSlice.name);
  const comment = useSelector((state) => state.commentSlice.comment);
  const ByCategory = useSelector((state) => state.categorySlice.ByCategory);

  // redux end

  // db start
  const putOrder = () => {
    axios
      .post("http://localhost:3000/order/", {
        image: ByProductsId.image,
        title: ByProductsId.title,
        price: ByProductsId.price,
      })
      .then((res) => {
        dispatch(getOrderedItem(res.data));
        addToCart();
      });
  };

  const putComment = (product, name, comment) => {
    axios
      .post("http://localhost:3000/comments/", { product, name, comment })
      .then((res) => {
        dispatch(addComment(res.data));
        send();
      });
  };

  useEffect(() => {
    getProductById(id).then((data) => {
      dispatch(get_product_by_id(data));
    });
  }, [id]);

  // db end

  // toast

  const addToCart = () => {
    toast.success("The item is added to cart ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const error = () => {
    toast.error("Name and Comment are required!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const send = () => {
    toast.success("Your Comment Has Been Sent !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  if (id > 20) {
    return <Error />;
  }
  if (ByProductsId.length === 0) {
    return <Loader />;
  }
  return (
    <div className="content container my-5">
      <ToastContainer />
      <button
        onClick={goBack}
        className="goBack btn btn-danger"
      >{`<-- Back`}</button>

      <div className="row">
        <div className="image col-lg-4 col-md-4 col-sm-12">
          <img
            src={ByProductsId.image}
            className="img-fluid"
            alt={ByProductsId.title}
          />
        </div>
        <div className="info col-lg-8 col-md-8 col-sm-12 mt-5">
          <h4 className="text-muted mt-4">{`Category>${ByProductsId.category}>${id}`}</h4>
          <h4>{ByProductsId.title}</h4>
          <p className="bg-success mt-3 py-2 text-light w-25 text-center">
            {`$${ByProductsId.price}`}
          </p>
          <p>{ByProductsId.description}</p>
          <div className="d-flex" style={{ gap: "1rem" }}>
            <button
              className="btn btn-info text-light"
              onClick={() => putOrder()}
            >
              Add To Cart
            </button>
            <button
              className="btn btn-info text-light"
              onClick={() =>
                getACategory(ByProductsId.category).then((data) => {
                  setShowCategory(!showCategory);
                  dispatch(get_a_category(data));
                })
              }
            >
              {`${
                showCategory === false
                  ? `See All ${ByProductsId.category}`
                  : `Close ${ByProductsId.category}`
              }`}
            </button>
          </div>
          <form
            className="contact mt-4"
            onSubmit={(e) => {
              e.preventDefault();

              if (name === "" || comment === "") {
                error();
              } else {
                putComment(ByProductsId.title, name, comment);
              }
            }}
          >
            <input
              type="text"
              className={`form-control my-3`}
              placeholder="Your (Full)Name"
              value={name}
              onChange={(e) => dispatch(get_name(e.target.value))}
            />

            <textarea
              className={`form-control`}
              placeholder="Comment .  .  .  ."
              rows="5"
              value={comment}
              onChange={(e) => dispatch(get_comment(e.target.value))}
            ></textarea>

            <button className="btn btn-success mt-2">Send</button>
          </form>
        </div>
      </div>

      {ByCategory.length > 0 && showCategory === true ? (
        <Swiper
          className="swiper-container"
          breakpoints={{
            360: {
              width: 400,
              margin: "auto",
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1000: {
              width: 1000,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{ delay: 2000 }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {ByCategory.map((item) => {
            if (item.id !== ByProductsId.id) {
              return (
                <div>
                  <SwiperSlide key={item.id}>
                    <div
                      className="card my-4 p-4 text-center"
                      style={{ width: "17rem" }}
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        style={{ height: "18rem" }}
                        className="card-img-top border-bottom pb-3"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{`$${Math.ceil(
                          item.price
                        )}`}</p>
                      </div>
                      <div className="card-footer d-flex justify-content-around">
                        <Link to={`/${item.id}`} className="btn btn-primary">
                          More
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            }
          })}
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
};

export default ByProductsId;
