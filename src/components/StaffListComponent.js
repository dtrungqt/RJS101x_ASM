import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

//tạo Component hiển thị mỗi staff
function RenderStaffItem({ staff }) {
  return (
    <Card className="mb-3">
      <Link to={`/menu/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <p className="text-center text-name">{staff.name}</p>
      </Link>
    </Card>
  );
}

//TẠO StaffList Component
function StaffList(props) {
  const staffList = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-md-4 col-lg-2">
        <RenderStaffItem staff={staff} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Nhân viên</h3>
          <hr />
        </div>
      </div>

      <div className="row">{staffList}</div>
    </div>
  );
}

export default StaffList;
