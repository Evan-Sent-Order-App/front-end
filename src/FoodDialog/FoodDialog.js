import React from "react";
import styled from "styled-components";
// import { FoodLabel } from "../Menu/FoodGrid";
import { Title } from "../Styles/title";
import {
  ESBlue,
  ESDarkBlue,
  ESLightBlue,
  ESLightYellow,
} from "../Styles/colors";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "./Choices";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 90px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 2%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 10px;
  background-color: ${ESLightBlue};
`;

const Desc = styled.div`
  font-size: 16px;
  color: ${ESDarkBlue};
`;

const ToppingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-top: 10px;
  background-color: ${ESLightYellow};
  margin-bottom: 15px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${ESBlue};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  font-size: 30px;
  padding-left: 3%;
  color: ${ESBlue};
`;

export function getPrice(order) {
  return order.quantity * order.price;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings)
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  function close() {
    setOpenFood();
  }

  function hasToppings(food) {
    return food.name === "Pizza Bites";
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          <DescriptionContainer>
            <Desc>description: {openFood.description}</Desc>
            <Desc>allergans: {openFood.allergies}</Desc>
          </DescriptionContainer>

          {hasToppings(openFood) && (
            <ToppingsContainer>
              What combo?
              <Toppings {...toppings}/>
            </ToppingsContainer>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            {isEditing ? `Update order: ` : `Add to order:`}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
