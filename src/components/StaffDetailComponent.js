import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

//tạo Component hiển thị thông tin 1 nhân viên được chọn
function RenderStaffInfo({ person }) {
  return (
    <div className="row mt-3 mb-5">
      {/* hiển thị ảnh nhân viên  */}
      <div className="col-12 col-md-4 col-lg-3">
        <img width="100%" src={person.image} alt={person.name} />
      </div>

      {/* hiển thị thông tin nhân viên  */}
      <div className="col-12 col-md-8 col-lg-9">
        <h4 className="font-weight-bold">Họ và tên: {person.name}</h4>
        <ul className="list-unstyled">
          <li className="mt-4">
            <strong>Ngày sinh:</strong>{" "}
            <span className="text-primary font-weight-bold">
              {dateFormat(person.doB, "dd/mm/yyyy")}
            </span>
          </li>
          <li className="mt-3">
            <strong>Ngày vào công ty:</strong>{" "}
            <span className="text-primary font-weight-bold">
              {dateFormat(person.startDate, "dd/mm/yyyy")}
            </span>
          </li>
          <li className="mt-3">
            <strong>Phòng ban:</strong>{" "}
            <span className="text-primary font-weight-bold">
              {person.department.name}
            </span>
          </li>
          <li className="mt-3">
            <strong>Số ngày nghỉ còn lại:</strong>{" "}
            <span className="text-primary font-weight-bold">
              {person.annualLeave}
            </span>
          </li>
          <li className="mt-3">
            <strong>Số ngày đã làm thêm:</strong>{" "}
            <span className="text-primary font-weight-bold">
              {person.overTime}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

const StaffDetail = (props) => {
  //HIỂN THỊ COMPONENT StaffDetail
  const staff = props.staff;

  if (staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Nhân Viên</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <RenderStaffInfo person={staff} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default StaffDetail;
