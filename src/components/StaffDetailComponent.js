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
          <h4 className="font-weight-bold">Họ và tên: {person.name}</h4>
          <ul className="list-unstyled">
            <li className="mt-4">
              <strong>Ngày sinh:</strong>{" "}
              <span className="text-primary font-weight-bold">
                {dateFormat(person.doB, "dd/mm/yyyy")}
              </span>
            </li>
            <li className="mt-1">
              <strong>Ngày vào công ty:</strong>{" "}
              <span className="text-primary font-weight-bold">
                {dateFormat(person.startDate, "dd/mm/yyyy")}
              </span>
            </li>
            <li className="mt-1">
              <strong>Phòng ban:</strong>{" "}
              <span className="text-primary font-weight-bold">
                {person.department.name}
              </span>
            </li>
            <li className="mt-1">
              <strong>Số ngày nghỉ còn lại:</strong>{" "}
              <span className="text-primary font-weight-bold">
                {person.annualLeave}
              </span>
            </li>
            <li className="mt-1">
              <strong>Số ngày đã làm thêm:</strong>{" "}
              <span className="text-primary font-weight-bold">
                {person.overTime}
              </span>
            </li>
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
