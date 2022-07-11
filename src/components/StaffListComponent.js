import React, { Component } from "react";
import { Card } from "reactstrap";
import StaffDetail from "./StaffDetailComponent";

//TẠO StaffList Component
class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  //tạo method cập nhật state selectedStaff
  onStaffSelect(person) {
    this.setState({ selectedStaff: person });
  }

  //hàm hiển thị component
  render() {
    const view = this.props.viewMode;

    console.log(view);
    //hiển thị từng nhân viên trong staffs.jsx
    const list = this.props.staffs.map((staff) => {
      if (view === "two") {
        return (
          <div key={staff.id} className="col-5 m-1">
            <Card onClick={() => this.onStaffSelect(staff)}>
              <p>{staff.name}</p>
            </Card>
          </div>
        );
      } else if (view === "three") {
        return (
          <div key={staff.id} className="col-3 m-1">
            <Card onClick={() => this.onStaffSelect(staff)}>
              <p>{staff.name}</p>
            </Card>
          </div>
        );
      } else if (view === "six") {
        return (
          <div key={staff.id} className="col-2">
            <Card onClick={() => this.onStaffSelect(staff)}>
              <p>{staff.name}</p>
            </Card>
          </div>
        );
      } else {
        return (
          <div key={staff.id} className="col-12 col-md-5 col-lg-3 m-1">
            <Card onClick={() => this.onStaffSelect(staff)}>
              <p>{staff.name}</p>
            </Card>
          </div>
        );
      }
    });

    return (
      <div className="container">
        <div className="row">{list}</div>

        <StaffDetail selectedStaff={this.state.selectedStaff} />
      </div>
    );
  }
}

export default StaffList;
