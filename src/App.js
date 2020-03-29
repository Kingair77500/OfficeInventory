import React from "react";
import { rem } from "polished";
import styled from "styled-components";
import Header from "./components/Header";
import ObjectManagement from "./components/ObjectManagement";
import "bootstrap/dist/css/bootstrap.min.css";

const AppComponents = styled.div`
  margin: ${rem(15)} ${rem(25)} ${rem(0)} ${rem(25)};
`;

function App() {
  return (
    <AppComponents>
      <Header />
      <ObjectManagement />
    </AppComponents>
  );
}

export default App;
