import React from "react";
import { useState, useEffect } from "react";
import useAxios from "../utils/useAxios";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const [res, setRes] = useState("");
  const api = useAxios();

  const token = localStorage.getItem("authTokens");

  let username = "";

  if (token) {
    const parsedToken = JSON.parse(token);
    const decode = jwtDecode(parsedToken.access);

    username = decode.username;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };

    fetchData();
  }, [api]);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await api.post("/test/");
        setRes(response.data.response);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };

    fetchPostData();
  }, [api]);

  return (
    <div>
      <>
        <div className="container-fluid" style={{ paddingTop: "100px" }}>
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-4">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span data-feather="home" />
                      Dashboard <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file" />
                      Orders
                    </a>
                  </li>
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved reports</span>
                  <a className="d-flex align-items-center text-muted" href="#">
                    <span data-feather="plus-circle" />
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text" />
                      Current month
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">My Dashboard</h1>
                <span>Hello {username}!</span>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      Share
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Export
                    </button>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" />
                    This week
                  </button>
                </div>
              </div>
              <div className="alert alert-success">
                <strong>{res}</strong>
              </div>
              <h2>Section title</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>City</th>
                      <th>Order Type</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dhaka</td>
                      <td>Mobile Purchase</td>
                      <td>৳15,000</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Sylhet</td>
                      <td>Grocery Order</td>
                      <td>৳2,500</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Chattogram</td>
                      <td>Electronics</td>
                      <td>৳35,000</td>
                      <td>Shipped</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Rajshahi</td>
                      <td>Clothing</td>
                      <td>৳4,800</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Khulna</td>
                      <td>Food Delivery</td>
                      <td>৳650</td>
                      <td>Delivered</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Barishal</td>
                      <td>Online Course</td>
                      <td>৳1,200</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Rangpur</td>
                      <td>Book Purchase</td>
                      <td>৳900</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Comilla</td>
                      <td>Furniture</td>
                      <td>৳18,000</td>
                      <td>Processing</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Mymensingh</td>
                      <td>Hospital Bill</td>
                      <td>৳5,500</td>
                      <td>Paid</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Dhaka</td>
                      <td>Internet Bill</td>
                      <td>৳1,200</td>
                      <td>Due</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Sylhet</td>
                      <td>Tea Export Order</td>
                      <td>৳75,000</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Chattogram</td>
                      <td>Ship Cargo</td>
                      <td>৳120,000</td>
                      <td>In Transit</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Rajshahi</td>
                      <td>Farm Equipment</td>
                      <td>৳22,000</td>
                      <td>Delivered</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Khulna</td>
                      <td>Fish Export</td>
                      <td>৳55,000</td>
                      <td>Processing</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Barishal</td>
                      <td>Medical Supply</td>
                      <td>৳8,300</td>
                      <td>Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
