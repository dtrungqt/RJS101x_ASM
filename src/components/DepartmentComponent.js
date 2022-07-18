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

//hiển thị các phòng ban
function RenderDepartment({ departments }, { staffs }) {
  const departmentList = departments.map(function (department) {
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3" key={department.id}>
        <Card>
          <CardTitle className="p-1">{department.name}</CardTitle>
          <CardBody>Số lượng nhân viên: {department.numberOfStaff}</CardBody>
        </Card>
      </div>
    );
  });
  console.log(departmentList);
  return (
    <div className="container">
      <div className="row ">{departmentList}</div>
    </div>
  );
}

function Department(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân Viên</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <RenderDepartment staffs={props.staffs} departments={props.departments} />
    </div>
  );
}

export default Department;
