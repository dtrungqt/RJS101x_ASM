import React, { Component } from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
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

        {/* Hiển thị danh sách nhân viên  */}
        <StaffList staffs={this.state.staffs} />

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
