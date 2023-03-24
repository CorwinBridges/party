import * as yup from "yup"

export const partySchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string().required("Required"),
})