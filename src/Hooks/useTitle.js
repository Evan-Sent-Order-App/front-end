import { useEffect } from "react";

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        // "Evan Sent Order Form";
        orders.length === 0
          ? `Evan Sent Order Form`
          : `[${orders.length}] items in your order!`;
    }
  });
}
