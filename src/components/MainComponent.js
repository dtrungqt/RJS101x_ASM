import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { STAFFS } from "../shared/staffs";
import { Switch, Route, Redirect } from "react-router-dom";

//TẠO StaffList Component
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };
  }

  //hàm hiển thị component
  render() {
    //tạo functional component
    const HomePage = () => {
      return <StaffList staffs={this.state.staffs} />;
    };
    return (
      <div>
        {/* Hiển thị Navbar  */}
        <Header />

        {/* Router  */}
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* <Route
            exact
            path="/department"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />} 
          />*/}
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
