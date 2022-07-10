import React, { Component } from "react";
import dateFormat from "dateformat";

class StaffDetail extends Component {
  constructor(props) {
    super(props);
  }

  //hiển thị ảnh của nhân viên
  renderImg(person) {
    if (person != null) {
      //trường hợp person không phải là null
      return (
        <div>
          <img width="100%" src={person.image} alt={person.name} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  //hiển thị thông tin nhân viên
  renderInfo(person) {
    if (person != null) {
      //trường hợp person không phải là null
      return (
        <div>
          <h4>Họ và tên: {person.name}</h4>
          <ul className="list-unstyled">
            <li className="mt-4">
              Ngày sinh:
              {dateFormat(person.doB, "dd/mm/yyyy")}
            </li>
            <li className="mt-1">
              Ngày vào công ty: {dateFormat(person.startDate, "dd/mm/yyyy")}
            </li>
            <li className="mt-1">Phòng ban: {person.department.name}</li>
            <li className="mt-1">
              Số ngày nghỉ còn lại: {person.annualLeave}{" "}
            </li>
            <li className="mt-1">Số ngày đã làm thêm: {person.overTime}</li>
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  //HIỂN THỊ COMPONENT StaffDetail
  render() {
    const staff = this.props.selectedStaff;

    if (staff != null) {
      return (
        <div className="row info-box">
          <div className="col-12 col-md-5 col-lg-5 m-1">
            {this.renderImg(staff)}
          </div>
          <div className="col-12 col-md-5 col-lg-5 m-1">
            {this.renderInfo(staff)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-12">
          <strong>Bấm vào tên nhân viên để xem thông tin.</strong>
        </div>
      );
    }
  }
}

export default StaffDetail;
