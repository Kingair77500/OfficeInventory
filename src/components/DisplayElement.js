import React, { memo } from "react";
import { rem } from "polished";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Buttons = styled(Button)`
  margin-left: ${rem(20)};
  margin-right: ${rem(20)};
`;

const DisplayElement = memo(
  ({ name, number, index, listObject, setListObject }) => {
    const addNumber = evt => {
      evt.preventDefault();
      let newArray = [...listObject];
      newArray[index].number = newArray[index].number + 1;
      setListObject(newArray);
    };

    const deleteNumber = evt => {
      evt.preventDefault();
      if (number > 0) {
        let newArray = [...listObject];
        newArray[index].number = newArray[index].number - 1;
        setListObject(newArray);
      }
    };

    const deleteInList = evt => {
      evt.preventDefault();
      let newArrayDeleted = listObject.filter(
        listObject => listObject.name !== name
      );
      setListObject(newArrayDeleted);
    };

    return (
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>
          <Buttons variant="success" onClick={evt => addNumber(evt)}>
            +
          </Buttons>
          {number}
          <Buttons variant="warning" onClick={evt => deleteNumber(evt)}>
            -
          </Buttons>
        </td>
        <td>
          <Button variant="outline-danger" onClick={evt => deleteInList(evt)}>
            Supprimer
          </Button>
        </td>
      </tr>
    );
  }
);

export default DisplayElement;
