import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { ESBlue, ESYellow } from "../Styles/colors";
import { getPrice } from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 80px;
  width: 340px;
  background-color: white;
  height: calc(100% - 80px);
  z-index: 1;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
  color: ${ESBlue};
  font-family: "Exo 2", sans-serif;
  font-weight: 700;
  font-style: italic;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid ${ESYellow};
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
  font-weight: 400;
`;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is empty.</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer> Your Order: </OrderContainer>

          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div />
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
