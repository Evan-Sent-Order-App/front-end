import React from "react";
import styled from "styled-components";
import { foods, formatPrice } from "../Data/FoodData";
import { ESBlue } from "../Styles/colors";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";

const MenuStyled = styled.div`
  /* height: 1000px; */
  margin: 0px 400px 50px 20px;
  h1 {
    font-family: "Exo 2", sans-serif;
    font-weight: 600;
    font-style: italic;
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
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
