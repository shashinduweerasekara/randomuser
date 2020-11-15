import React, { useEffect, useState } from "react";
import NameListItem from "./NameListItem";

function NameList() {
  const [loadData, setLoadData] = useState(new Date());
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList((nameList) => [...nameList, responseData.results[0]]);
      });
  }, [loadData]);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={
            aName.name.title + " " + aName.name.first + " " + aName.name.last
          }
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUseradder = () => {
    setLoadData(new Date());
  };

  return (
    <React.Fragment>
      <div className="container my-3">
        <button className="btn btn-dark mb-3" onClick={addUseradder}>
          Add User
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;
