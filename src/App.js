import React, { Component } from "react";
import "./App.css";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <div>
          {/* Navbar  */}
          <Header />

          {/* Hiển thị danh sách nhân viên  */}
          <StaffList
            staffs={this.state.staffs}
            viewMode={this.state.viewMode}
          />

          {/* FOOTER  */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
