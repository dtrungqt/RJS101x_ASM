import React, { Component } from "react";
import "./App.css";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      viewMode: "default",
    };
  }

  render() {
    return (
      <div>
        {/* Navbar  */}
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark mb-5">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="/">
                Nhân viên
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/">
                Chỉnh sửa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="/">
                Tìm kiếm
              </a>
            </li>
          </ul>
        </nav>

        {/* Chọn chế độ hiển thị  */}
        <div className="container">
          <div className="form-group row m-3">
            <div className="custom-control custom-radio col-sm-2">
              <input
                type="radio"
                className="custom-control-input"
                id="two-col"
                name="view-option"
              />
              <label className="custom-control-label" htmlFor="two-col">
                2 hàng
              </label>
            </div>
            <div className="custom-control custom-radio col-sm-2">
              <input
                type="radio"
                className="custom-control-input"
                id="three-col"
                name="view-option"
              />
              <label className="custom-control-label" htmlFor="three-col">
                3 hàng
              </label>
            </div>
            <div className="custom-control custom-radio col-sm-2">
              <input
                type="radio"
                className="custom-control-input"
                id="six-col"
                name="view-option"
              />
              <label className="custom-control-label" htmlFor="six-col">
                6 hàng
              </label>
            </div>
            <div className="custom-control custom-radio col-sm-2">
              <input
                type="radio"
                className="custom-control-input"
                id="default-col"
                name="view-option"
              />
              <label className="custom-control-label" htmlFor="default-col">
                Mặc định
              </label>
            </div>
            <button
              type="button"
              className="btn btn-success col-sm-2"
              id="submit-btn"
              onClick={() => {
                if (document.getElementById("two-col").checked) {
                  this.setState({ viewMode: "two" });
                } else if (document.getElementById("three-col").checked) {
                  this.setState({ viewMode: "three" });
                } else if (document.getElementById("six-col").checked) {
                  this.setState({ viewMode: "six" });
                } else if (document.getElementById("default-col").checked) {
                  this.setState({ viewMode: "default" });
                }
              }}
            >
              Áp dụng
            </button>
          </div>
        </div>

        {/* Hiển thị danh sách nhân viên  */}
        <StaffList staffs={this.state.staffs} viewMode={this.state.viewMode} />

        {/* FOOTER  */}
        <footer>
          <div className="jumbotron bg-primary mt-5">
            <div className="col-12">
              <p>
                <strong>Nguyễn Đình Trung FX16739</strong>
              </p>
              <p>Liên Chiểu, Đà Nẵng, Việt Nam</p>
              <p>SĐT: 0123456789</p>
              <p>Gmail: trungndfx@gmail.com</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
