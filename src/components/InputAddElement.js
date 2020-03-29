import React from "react";
import { rem } from "polished";
import styled from "styled-components";

const FormAddElement = styled.form`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapperAdd = styled.div`
  display: flex;
`;

const DecorationInput = styled.div`
  margin-top: ${rem(10)};
  max-width: ${rem(200)};
  border-radius: ${rem(5)};
  border: 1px solid grey;
`;

const InputElement = styled.input`
  border: none;
  max-width: ${rem(180)};
`;

const ButtonAdd = styled.button`
  margin-top: ${rem(10)};
  margin-left: ${rem(10)};
  max-width: ${rem(150)};
  border-radius: ${rem(5)};
  font-size: 1em;
  color: white;
  background-color: #1565c0;
  border: 2px solid #1565c0;
  cursor: pointer;

  &:hover {
    background-color: #003c8f;
    border: 2px solid #003c8f;
  }
`;

const ButtonDelete = styled(ButtonAdd)`
  color: #b71c1c;
  background-color: white;
  border: 2px solid #b71c1c;

  &:hover {
    color: white;
    background-color: #b71c1c;
    border: 2px solid #b71c1c;
  }
`;

const InputAddElement = ({ setNameObject, setListObject }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    setNameObject(evt.target.username.value);
  };

  const deleteAll = evt => {
    evt.preventDefault();
    setListObject("");
  };

  return (
    <FormAddElement onSubmit={evt => handleSubmit(evt)}>
      <label>Nom de l'objet:</label>
      <Wrapper>
        <WrapperAdd>
          <DecorationInput>
            <InputElement type="text" name="username" placeholder="Ex: Stylo" />
          </DecorationInput>
          <ButtonAdd>Ajouter</ButtonAdd>
        </WrapperAdd>
        <ButtonDelete variant="outline-danger" onClick={evt => deleteAll(evt)}>
          Danger
        </ButtonDelete>
      </Wrapper>
    </FormAddElement>
  );
};

export default InputAddElement;
