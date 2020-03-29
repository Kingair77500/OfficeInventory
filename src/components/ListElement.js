import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import DisplayElement from "./DisplayElement";

const ListComponents = styled.div``;

const Title = styled.h2`
  margin-top: ${rem(10)};
  font-size: ${rem(25)};
`;

const TableElement = ({ listObject, setListObject }) => {
  return (
    <tbody>
      {listObject.map((item, index) => {
        return (
          <DisplayElement
            key={item.name}
            name={item.name}
            number={item.number}
            index={index}
            listObject={listObject}
            setListObject={setListObject}
          />
        );
      })}
    </tbody>
  );
};

const ListElement = ({ listObject, setListObject }) => {
  return (
    <ListComponents>
      <Title>List Object:</Title>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        {typeof listObject === "string" ? (
          <tbody>
            <tr>
              <td></td>
              <td>Votre liste objets est vide</td>
            </tr>
          </tbody>
        ) : (
          <TableElement listObject={listObject} setListObject={setListObject} />
        )}
      </Table>
    </ListComponents>
  );
};

export default ListElement;
