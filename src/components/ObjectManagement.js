import React, { useState, useEffect } from "react";
import { rem } from "polished";
import styled from "styled-components";
import InputAddElement from "./InputAddElement";
import ListElement from "./ListElement";

const ObjectManagementComponents = styled.div`
  margin: ${rem(10)};
  border-radius: 12px;
`;

const ObjectManagement = () => {
  const [nameObject, setNameObject] = useState("");
  const [listObject, setListObject] = useState(
    JSON.parse(localStorage.getItem("listData")) || []
  );

  useEffect(() => {
    if (nameObject !== "") {
      if (listObject.length !== 0) {
        let i = 0;
        listObject.forEach((item, index) => {
          if (item.name.toLowerCase() === nameObject.toLowerCase()) {
            let newArray = [...listObject];
            newArray[index].number = newArray[index].number + 1;
            setListObject(newArray);
            i++;
          } else {
            if (i === 0)
              setListObject([...listObject, { name: nameObject, number: 1 }]);
          }
        });
      } else setListObject([...listObject, { name: nameObject, number: 1 }]);
    }
    localStorage.setItem("listData", JSON.stringify(listObject));
    setNameObject("");
  }, [nameObject, listObject]);

  return (
    <ObjectManagementComponents>
      <InputAddElement
        setNameObject={setNameObject}
        setListObject={setListObject}
      />
      <ListElement listObject={listObject} setListObject={setListObject} />
    </ObjectManagementComponents>
  );
};

export default ObjectManagement;
