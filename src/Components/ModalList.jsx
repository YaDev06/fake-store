import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { filterFromCart, setOrder } from "../redux/slices/orderSlice";
import { changeModal } from "../redux/slices/modalSlice";

const ModalList = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderSlice.order);

  useEffect(() => {
    axios
      .get("http://localhost:3000/order")
      .then((res) => dispatch(setOrder(res.data)));
  }, []);
  const remove = () => {
    toast.error("The item is deleted to cart ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const deleteFromOrder = (id) => {
    axios.delete(`http://localhost:3000/order/${id}`).then(() => {
      dispatch(filterFromCart({ id }));
      remove();
    });
  };

  return (
    <div className="modal-list" onClick={() => dispatch(changeModal())}>
      <ToastContainer />
      <div className="tableDiv">
        <table
          className="table table-info"
          onClick={(e) => e.stopPropagation()}
        >
          <thead>
            <tr>
              <th colSpan="2">Fake Store Cart</th>
              <th>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    marginRight: "10px",
                    fontSize: "1.3rem",
                  }}
                >
                  <svg
                    onClick={() => dispatch(changeModal())}
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "4rem" }}
                      />
                    </td>
                    <td>
                      <p className="mt-4 text-center">
                        <span className="mt-2">{item.title} </span>
                        {" is "}
                        <span
                          className="text-success"
                          style={{ fontSize: "1.1rem" }}
                        >
                          ${item.price}
                        </span>
                      </p>
                    </td>
                    <td
                      className="d-flex justify-content-end "
                      style={{ paddingBottom: "60px", paddingTop: "35px" }}
                    >
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteFromOrder(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center" colSpan="4">
                  No items, Please add items to cart
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModalList;
