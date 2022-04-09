import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("username is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("size is required"),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  mushroom: yup.boolean(),
  canadianBacon: yup.boolean(),
  pineapple: yup.boolean(),
  special: yup.string(),
});

export default formSchema;
