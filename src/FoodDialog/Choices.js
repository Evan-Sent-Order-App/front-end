import React from "react";
import styled from "styled-components";

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;

const Label = styled.label`
  ${CursorPointer}
`;

const Title = styled.h2`
  font-family: "Exo 2", sans-serif;
  font-size: 12px;
  padding: 5px;
`;

export function Choices({ openFood, choiceRadio }) {
  return (
    <>
      <Title>Choose one</Title>
      {openFood.choices.map((choice) => (
        <>
          <RadioInput
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={choiceRadio.onChange}
          />
          <Label for={choice}> {choice} </Label>{" "}
        </>
      ))}
    </>
  );
}
