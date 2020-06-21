import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Table, Alert } from "react-bootstrap";

const Calculator = () => {
  const [number, setNumber] = useState("");
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus());

  const first = Number(number);
  const second = Number(first) * 2;
  const third = Number(first) + Number(second);
  const fourth = Number(second) * 2;
  const sixth = Number(third) * 2;
  const seventh = Number(sixth) + Number(first);
  const eighth = Number(fourth * 2);
  const ninth = Number(eighth) + Number(first);
  const tenth = Number(first) * 10;
  const fifth = Number(tenth) / 2;
  
  return (
    <Container>
      <div className="Header">
        <h1>Evan's Personal Calculator</h1>
        <br />
        <Form.Control
          ref={inputRef}
          type="text"
          value={number}
          placeholder="Please enter a number"
          onChange={e => setNumber(Number(e.target.value))}
        />
        <br />
        <Alert variant="primary">Your number is {number}</Alert>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Multiple</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First</td>
            <td>
              <strong>{number}</strong>
            </td>
            <td>{first}</td>
          </tr>
          <tr>
            <td>Second</td>
            <td>
              <i>first * 2</i>
            </td>
            <td>{second}</td>
          </tr>
          <tr>
            <td>Third</td>
            <td>
              <i>first + second</i>
            </td>
            <td>{third}</td>
          </tr>
          <tr>
            <td>Fourth</td>
            <td>
              <i>second * 2</i>
            </td>
            <td>{fourth}</td>
          </tr>
          <tr>
            <td>Fifth</td>
            <td>
              <i>tenth / 2</i>
            </td>
            <td>{fifth}</td>
          </tr>
          <tr>
            <td>Sixth</td>
            <td>
              <i>third * 2</i>
            </td>
            <td>{sixth}</td>
          </tr>
          <tr>
            <td>Seventh</td>
            <td>
              <i>sixth + first</i>
            </td>
            <td>{seventh}</td>
          </tr>
          <tr>
            <td>Eighth</td>
            <td>
              <i>fourth * 2</i>
            </td>
            <td>{eighth}</td>
          </tr>
          <tr>
            <td>Ninth</td>
            <td>
              <i>eighth + first</i>
            </td>
            <td>{ninth}</td>
          </tr>
          <tr>
            <td>Tenth</td>
            <td>
              <i>first * 10</i>
            </td>
            <td>{tenth}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Calculator;
