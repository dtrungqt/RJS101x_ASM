import React, { Component } from "react";
import { Card } from "reactstrap";

//TẠO StaffList Component
class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  //hàm hiển thị component
  render() {
    //hiển thị từng nhân viên trong staffs.jsx
    const list = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-5 col-lg-3 m-1">
          <Card>
            <p>{staff.name}</p>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{list}</div>
      </div>
    );
  }
}

export default StaffList;
