import React, { Component } from "react";
import {
  Card,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

/*
//hàm sắp xếp mảng theo giá trị ID tăng dần
function ascendingArray(array, type) {
  //tạo 1 bản sao nông (shallow coppy) để không ảnh hưởng tới giá trị mảng ban đầu
  let ascendingArr = array.slice(0);
  for (let i = 0; i < ascendingArr.length; i++) {
    const temp = ascendingArr[i];
    let j;
    for (j = i - 1; j >= 0 && `ascendingArr[j].${type}` > `temp.${type}`; j--) {
      ascendingArr[j + 1] = ascendingArr[j];
    }
    ascendingArr[j + 1] = temp;
  }
  return ascendingArr;
}
*/

//hàm sắp xếp mảng theo giá trị ID tăng dần
function ascendingIDArray(array, type) {
  //tạo 1 bản sao nông (shallow coppy) để không ảnh hưởng tới giá trị mảng ban đầu
  let ascendingArr = array.slice(0);
  for (let i = 0; i < ascendingArr.length; i++) {
    const temp = ascendingArr[i];
    let j;
    for (j = i - 1; j >= 0 && ascendingArr[j].id > temp.id; j--) {
      ascendingArr[j + 1] = ascendingArr[j];
    }
    ascendingArr[j + 1] = temp;
  }
  return ascendingArr;
}

//hàm sắp xếp mảng theo giá trị ID giảm dần
function descendingIDArray(array, type) {
  let ascendingArr = array.slice(0);
  for (let i = 0; i < ascendingArr.length; i++) {
    const temp = ascendingArr[i];
    let j;
    for (j = i - 1; j >= 0 && ascendingArr[j].id < temp.id; j--) {
      ascendingArr[j + 1] = ascendingArr[j];
    }
    ascendingArr[j + 1] = temp;
  }
  return ascendingArr;
}

//hàm sắp xếp mảng theo giá trị Salary tăng dần
function ascendingSalaryArray(array, type) {
  //tạo 1 bản sao nông (shallow coppy) để không ảnh hưởng tới giá trị mảng ban đầu
  let ascendingArr = array.slice(0);
  for (let i = 0; i < ascendingArr.length; i++) {
    const temp = ascendingArr[i];
    let j;
    for (j = i - 1; j >= 0 && ascendingArr[j].salary > temp.salary; j--) {
      ascendingArr[j + 1] = ascendingArr[j];
    }
    ascendingArr[j + 1] = temp;
  }
  return ascendingArr;
}

//hàm sắp xếp mảng theo giá trị Salary giảm dần
function descendingSalaryArray(array) {
  let ascendingArr = array.slice(0);
  for (let i = 0; i < ascendingArr.length; i++) {
    const temp = ascendingArr[i];
    let j;
    for (j = i - 1; j >= 0 && ascendingArr[j].salary < temp.salary; j--) {
      ascendingArr[j + 1] = ascendingArr[j];
    }
    ascendingArr[j + 1] = temp;
  }
  return ascendingArr;
}

//Component hiển thị thông tin lương mỗi nhân viên
function RenderSalary({ info }) {
  const salaryList = info.map((staff) => {
    const salary = Math.round(
      staff.salaryScale * 3000000 + staff.overTime * 200000
    );

    //TẠO 1 THUỘC TÍNH: salary mới cho mỗi phần tử (mỗi nhân viên)
    staff.salary = salary;

    return (
      <div className="col-12 col-md-6 col-lg-4 mb-3" key={staff.id}>
        <Card className="dark-color">
          <CardTitle className="p-1">{staff.name}</CardTitle>
          <CardBody>
            <p>Mã nhân viên: {staff.id}</p>
            <p>Hệ số lương: {staff.salaryScale}</p>
            <p>Số ngày làm thêm: {staff.overTime}</p>
            <div className="salary-box">
              <p className="text-center m-2">
                Lương: <strong>{staff.salary}</strong>
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

class Salary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortMode: "Default",
    };
  }

  onSortSelect(selected) {
    this.setState({ sortMode: selected });
  }

  render() {
    const staffsList = this.props.staffs;

    //chọn giá trị để hiển thị
    let viewMode;
    if (this.state.sortMode === "Default") viewMode = staffsList;
    else if (this.state.sortMode === "Ascending ID")
      viewMode = ascendingIDArray(staffsList);
    else if (this.state.sortMode === "Descending ID")
      viewMode = descendingIDArray(staffsList);
    else if (this.state.sortMode === "Ascending Salary")
      viewMode = ascendingSalaryArray(staffsList);
    else if (this.state.sortMode === "Descending Salary")
      viewMode = descendingSalaryArray(staffsList);
    // console.log(this.state.sortMode);
    // console.log(viewMode);

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

        {/* Thanh sắp xếp  */}
        <div className="row mb-3">
          <div className="col-md-7"></div>
          <label
            htmlFor="input-type"
            className="col-md-2 col-form-label pl-5 pr-0"
          >
            <strong>Sort by:</strong>
          </label>
          <div className="col-md-3">
            <select
              className="form-control"
              id="input-type"
              onChange={() =>
                this.onSortSelect(document.getElementById("input-type").value)
              }
            >
              <option>Default</option>
              <option>Ascending ID</option>
              <option>Descending ID</option>
              <option>Ascending Salary</option>
              <option>Descending Salary</option>
            </select>
          </div>
        </div>

        {/* Hiển thị thông tin lương  */}
        <RenderSalary info={viewMode} />
      </div>
    );
  }
}

export default Salary;
