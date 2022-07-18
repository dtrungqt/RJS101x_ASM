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

function RenderSalary({ info }) {
  const salaryList = info.map((staff) => {
    const salary = Math.round(
      staff.salaryScale * 3000000 + staff.overTime * 200000
    );

    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3" key={staff.id}>
        <Card>
          <CardTitle className="p-1">{staff.name}</CardTitle>
          <CardBody>
            <p>Mã nhân viên: {staff.id}</p>
            <p>Hệ số lương: {staff.salaryScale}</p>
            <p>Số ngày làm thêm: {staff.overTime}</p>
            <div className="salary-box">
              <p className="text-center m-2">
                Lương: <strong>{salary}</strong>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{salaryList}</div>
    </div>
  );
}

function Salary({ staffs }) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân Viên</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <RenderSalary info={staffs} />
    </div>
  );
}

export default Salary;
