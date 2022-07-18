import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from "react-router-dom";

//TẠO StaffList Component
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  //hàm hiển thị component
  render() {
    //tạo functional component để truyền thuộc tính vào StaffList Component
    const HomePage = () => {
      return <StaffList staffs={this.state.staffs} />;
    };

    //tạo component để truyền thuộc tính vào StaffDetail
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        {/* Hiển thị Navbar  */}
        <Header />

        {/* Router  */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/menu/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/department"
            component={() => (
              <Department departments={this.state.departments} />
            )}
          />
          <Route
            exact
            path="/salary"
            component={() => <Salary staffs={this.state.staffs} />}
          />
          {/* Sử dụng exact có nghĩa là path phải khớp chính xác với path sau đó (ở
          đây là /menu). Bởi vì ta định tuyến (route) đến DishDetail Component
          và sử dụng một đường dẫn bắt đầu bằng /menu */}

          {/* Đặt đường dẫn mặc định */}
          {/* nếu route không khớp với bất kỳ tuyến nào:
          /home nay /menu thì sẽ chuyển hướng tới /home */}
          <Redirect to="/home" />
        </Switch>

        {/* Footer  */}
        <Footer />
      </div>
    );
  }
}

export default Main;
