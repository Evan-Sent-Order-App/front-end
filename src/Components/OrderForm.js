import React from "react";

const OrderForm = (props) => {
  const { formValues, change, submit, disabled, errors } = props;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div id="pizza-form">
      <h1>Lambda Eats Pizza Order Form</h1>
      <p>
        {errors.name}
        {errors.size}
        {errors.special}
      </p>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label>
          Name on Order
          <input
            id="name-input"
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
            placeholder="Name"
          />
        </label>
        <label>
          What Size?
          <select
            name="size"
            value={formValues.size}
            onChange={onChange}
            id="size-dropdown"
          >
            <option value="select"> Select </option>
            <option value="personal">Personal</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <div>
          <h3>Toppings</h3>
          <label>
            cheese
            <input
              type="checkbox"
              name="cheese"
              checked={formValues.cheese}
              onChange={onChange}
            />
          </label>
          <label>
            pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={formValues.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            mushroom
            <input
              type="checkbox"
              name="mushroom"
              checked={formValues.mushroom}
              onChange={onChange}
            />
          </label>
          <label>
            canadian bacon
            <input
              type="checkbox"
              name="canadianBacon"
              checked={formValues.canadianBacon}
              onChange={onChange}
            />
          </label>
          <label>
            pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={formValues.pineapple}
              onChange={onChange}
            />
          </label>
        </div>
        <label>
          Special Requests
          <input
            id="special-text"
            type="text"
            value={formValues.special}
            name="special"
            onChange={onChange}
            placeholder="Special Requests"
          />
        </label>

        <div>
          <button id="order-button" disabled={disabled}>
            Add to Order
          </button>
        </div>
      </form>
    </div>
  );
};
export default OrderForm;
