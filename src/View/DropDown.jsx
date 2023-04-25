import { useState } from "react";
import { Display } from "../Card/Display";
import dropDownList from "./Dropdown";
import { Container, Row, Col } from "react-bootstrap";

export const DropDown = () => {
  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <select onChange={handleSelect}>
              <option value=""> -- Select a Hook -- </option>

              {dropDownList.map((ele, index) => (
                <option key={index} value={ele.value}>
                  {ele.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <br />
        <Display value={select} />
      </Container>
    </>
  );
};
