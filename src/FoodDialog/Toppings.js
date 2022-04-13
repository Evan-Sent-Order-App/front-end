import styled from "styled-components";
import React from "react";

const ToppingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingContainer>
      {toppings.map((topping, i) => (
        <CheckboxLabel>
          <ToppingCheckbox
            type="checkbox"
            checked={topping.checked}
            onClick={() => {
              checkTopping(i);
            }}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingContainer>
  );
}
