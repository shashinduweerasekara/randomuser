import React from "react";
import Moment from "moment";

function NameListItem(props) {
  return (
    <li class="list-group-item shadow">
      <div className="row align-items-center">
        <div className="col-2 d-flex justify-content-center">
          <img
            class="border rounded-circle"
            src={props.avatar}
            alt={props.name}
          />
        </div>
        <div className="col-10">
          <h4>Name: {props.name}</h4>
          <p className="mb-1">City: {props.city}</p>
          <p>Email: {props.email}</p>
          <p>Birthday: {Moment(props.birthday).format("DD-MM-YYYY")}</p>
        </div>
      </div>
    </li>
  );
}

export default NameListItem;
