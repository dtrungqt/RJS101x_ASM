import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    //Khai báo hàm toggleNav thành 1 state tên toggleNav bằng cách sử dụng bind
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-primary navbar-dark" expand="md">
          {/* Thuộc tính expand chỉ định Navbar sẽ được hiển thị ở dạng đầy đủ chỉ
          cho kích thước màn hình được cấu hình - ở đây là md - màn hình trung
          bình trở lên */}
          <div className="container">
            {/* Tạo một button để bật/tắt Collapse  */}
            {/* nút này sẽ chỉ được hiển thị trên kích thước màn hình cực nhỏ đến
            nhỏ, đối với kích thước màn hình trung bình trở lên, nút này sẽ được
            ẩn */}
            {/* Lưu ý: trong onClick, thay vì dùng hàm mũi tên để gọi toggleNav method, ta có thể chuyển hàm toggleNav thành 1state bằng cách sử dụng bind, rồi gọi nó như 1 state. Điều này chỉ hoạt động với hàm ko truyền vào tham số */}
            <NavbarToggler onClick={this.toggleNav} />

            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Restaurant"
              />
            </NavbarBrand>
            {/* Phần được thu gọn khi màn hình từ nhỏ trở xuống  */}
            <Collapse isOpen={this.state.isNavOpen} navbar>
              {/* Nếu state.isOpen là false thì mọi thứ trong Collapse sẽ bị ẩn, nếu true thì hiển thị. Ta chuyển đội trạng thái này bằng cách click vào Toggle Button  */}
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-users fa-lg"></span>Nhân Viên
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/department">
                    <span className="fa fa-id-card fa-lg"></span>Phòng Ban
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/salary">
                    <span className="fa fa-money fa-lg"></span>Bảng Lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
