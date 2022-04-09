import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData";
import { ESBlue } from "../Styles/colors";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";

const MenuStyled = styled.div`
  /* height: 1000px; */
  margin: 0px 400px 50px 20px;
  h1 {
    font-weight: 400;
    color: ${ESBlue};
  }
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1> {sectionName} </h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>{food.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
