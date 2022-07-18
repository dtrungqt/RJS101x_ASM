import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

//tạo Component hiển thị mỗi staff
function RenderStaffItem({ staff }) {
  return (
    <Card className="mb-3 card-select">
      <Link to={`/menu/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
        <p className="text-center text-name">{staff.name}</p>
      </Link>
    </Card>
  );
}

//TẠO StaffList Component
class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffName: "none",
    };
  }

  onStaffSelect(staff) {
    this.setState({ staffName: staff });
  }

  render() {
    let staffList = this.props.staffs;
    const searchName = this.state.staffName;
    console.log(searchName);

    //danh sách kết quả tìm kiếm nhân viên theo tên
    let searchResult;
    searchName && searchName !== "none"
      ? (searchResult = staffList.filter((staff) =>
          staff.name.toLowerCase().includes(searchName)
        ))
      : (searchResult = "");

    // console.log(searchResult);

    if (searchName === "none") {
      staffList = staffList.map((staff) => {
        return (
          <div key={staff.id} className="col-6 col-md-4 col-lg-2">
            <RenderStaffItem staff={staff} />
          </div>
        );
      });
    } else if (searchResult.length) {
      staffList = searchResult.map((staff) => {
        return (
          <div key={staff.id} className="col-6 col-md-4 col-lg-2">
            <RenderStaffItem staff={staff} />
          </div>
        );
      });
    } else {
      staffList = "";
    }

    /*
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-6 col-md-4 col-lg-2">
          <RenderStaffItem staff={staff} />
        </div>
      );
    });
*/
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3>Nhân viên</h3>
          </div>

          {/* Thanh Search  */}
          <div className="col-6 mt-2">
            <form>
              <div className="form-group row mb-3">
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="input-query"
                    placeholder="Fill in the name"
                  />
                </div>
                <div className="col-sm-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="btn-submit"
                    onClick={() => {
                      this.onStaffSelect(
                        document
                          .getElementById("input-query")
                          .value.toLowerCase()
                      );
                      // console.log(document.getElementById("input-query").value);
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="mt-0" />

        <div className="row">{staffList}</div>
      </div>
    );
  }
}

export default StaffList;
