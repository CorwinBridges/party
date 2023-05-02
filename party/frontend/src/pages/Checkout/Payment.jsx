import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { customAlphabet } from "nanoid"
import * as Yup from "yup"

import { useStateContext } from "../../context/StateContext"

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  shipAddress: Yup.string()
    .max(100, "Shipping address cannot be longer than 100 characters")
    .required("Shipping address is required"),
  shipCity: Yup.string()
    .max(50, "Shipping city cannot be longer than 50 characters")
    .required("Shipping city is required"),
  shipZipCode: Yup.string()
    .matches(
      /^\d{5}(-\d{4})?$/,
      "Invalid zip code format. Use either xxxxx or xxxxx-xxxx"
    )
    .required("Shipping zip code is required"),
  shipState: Yup.string()
    .matches(
      /^(?:(A[KLRZ]|C[AOT]|D[EC]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY]))$/,
      "Invalid state abbreviation. Use a valid 2-letter US state abbreviation"
    )
    .required("Shipping state is required"),
  creditCardNumber: Yup.string()
    .matches(
      /^(\d{4}-){3}\d{4}$/,
      "Invalid credit card number format. Use xxxx-xxxx-xxxx-xxxx"
    )
    .required("Credit card number is required"),
  creditCardExpiration: Yup.string()
    .matches(/^([01]?[0-9])\/([0-9]{2})$/, "Invalid expiration date")
    .test(
      "expirationDate",
      "Expiration date must be in the future",
      function (value) {
        const today = new Date()
        const [month, year] = value.split("/")
        const expirationDate = new Date(
          parseInt(`20${year}`, 10),
          parseInt(month, 10) - 1
        )
        return expirationDate > today
      }
    )
    .required("Expiration date is required"),
  creditCardCVV: Yup.string()
    .matches(/^\d{3}$/, "Invalid CVV format. Must be 3 digits")
    .required("Credit card CVV is required"),
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot be longer than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot be longer than 50 characters")
    .required("Last name is required"),
})

const initialValues = {
  email: "",
  shipAddress: "",
  shipCity: "",
  shipZipCode: "",
  shipState: "",
  creditCardNumber: "",
  creditCardExpiration: "",
  creditCardCVV: "",
  firstName: "",
  lastName: "",
}

const Payment = () => {
  const {
    cartItems,
    getTotalQuantity,
    calculateSubtotalPrice,
    calculateTotalPrice,
    calculateTaxes,
    setOpen,
    emptyCart,
  } = useStateContext()
  const navigate = useNavigate()

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const websiteUrl = "https://partyinaboxserver.vercel.app/api/orders"
    const localUrl = "http://localhost:6968/api/orders"
    const websiteUrlCheckouts =
      "https://partyinaboxserver.vercel.app/api/checkouts"
    const localUrlCheckouts = "http://localhost:6968/api/checkouts"
    let promise = null
    const totalQuantity = getTotalQuantity()
    const subtotalPrice = calculateSubtotalPrice()
    const taxes = calculateTaxes()
    const shipping = 0.0
    const totalPrice = calculateTotalPrice()
    const nanoid = customAlphabet("1234567890abcdef", 10)

    const checkoutData = {
      orderId: "69" + nanoid(),
      cartItems,
      totalQuantity,
      subtotalPrice,
      taxes,
      shipping,
      totalPrice,
      createdAt: new Date(),
      ...values,
    }

    try {
      promise = toast.loading("Submitting payment...")

      const responseOrders = await axios.post(websiteUrl, checkoutData)
      const responseCheckouts = await axios.post(
        websiteUrlCheckouts,
        checkoutData
      )

      toast.dismiss(promise)
      toast.success("Payment submitted successfully!")
      resetForm()
      navigate("/thanks")
      setOpen(false)
      emptyCart()
    } catch (error) {
      console.error("Error submitting payment to websiteUrl(s):", error)

      try {
        promise = toast.loading("Submitting payment...")

        const responseOrders = await axios.post(localUrl, checkoutData)
        const responseCheckouts = await axios.post(
          localUrlCheckouts,
          checkoutData
        )

        toast.dismiss(promise)
        toast.success("Payment submitted successfully!")
        resetForm()
        navigate("/thanks")
        setOpen(false)
        emptyCart()
      } catch (error) {
        console.error("Error submitting payment to localUrl(s):", error)
        toast.dismiss(promise)
        toast.error("Error submitting payment")
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      {/* background circles */}
      <div className="absolute -right-20 top-[58rem]">
        <div className="relative bottom-0 z-0 h-[400px] w-[400px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#C2A0F0]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute right-40 top-[48rem]">
        <div className="relative bottom-0 z-0 h-[300px] w-[300px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#4C6DDF]/[0.54] to-[#E46EC7]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      {/* Right blur circle */}
      <div className="absolute -left-40 top-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#527CF4] opacity-[0.64] blur-[130px]" />

      {/* form boxes */}
      <div className="relative z-10 mx-auto max-w-3xl rounded-[69px] text-white">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="md:mx-4">
                <div className="mb-8 flex flex-wrap">
                  <div className="mb-4 w-full bg-gradient-to-bl from-purple-500 to-red-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    Contact Information
                  </div>
                  <div className="mt-2 w-1/2 px-2">
                    <label htmlFor="firstName" className="text-base leading-8">
                      First Name
                    </label>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="Joe"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <div className="mt-2 w-1/2 px-2">
                    <label htmlFor="lastName" className="text-base leading-8">
                      Last Name
                    </label>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Mama"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="mt-2 w-full px-2">
                    <label htmlFor="email" className="text-base leading-8">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="joe.mama@example.com"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex flex-wrap">
                  <div className="mb-4 w-full bg-gradient-to-bl from-purple-500 to-red-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    Payment Details
                  </div>
                  <div className="mt-2 w-full px-2">
                    <label
                      htmlFor="creditCardNumber"
                      className="text-base leading-8"
                    >
                      Credit Card Number
                    </label>
                    <Field
                      name="creditCardNumber"
                      type="text"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="creditCardNumber" />
                    </div>
                  </div>
                  <div className="mb-2 mt-2 w-1/2 px-2">
                    <label
                      htmlFor="creditCardExpiration"
                      className="text-base leading-8"
                    >
                      Expiration
                    </label>
                    <Field
                      name="creditCardExpiration"
                      placeholder="MM/YY"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="creditCardExpiration" />
                    </div>
                  </div>
                  <div className="mb-2 mt-2 w-1/2 px-2">
                    <label
                      htmlFor="creditCardCVV"
                      className="text-base leading-8"
                    >
                      CVV
                    </label>
                    <Field
                      name="creditCardCVV"
                      type="text"
                      placeholder="xxx"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="creditCardCVV" />
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex flex-wrap">
                  <div className="mb-4 w-full bg-gradient-to-bl from-purple-500 to-red-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    Shipping Address
                  </div>
                  <div className="mt-2 w-full px-2">
                    <label
                      htmlFor="shipAddress"
                      className="text-base leading-8"
                    >
                      Address
                    </label>
                    <Field
                      name="shipAddress"
                      type="text"
                      placeholder="575 Lambuth Blvd."
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="shipAddress" />
                    </div>
                  </div>
                  <div className="mt-2 w-1/3 px-2">
                    <label htmlFor="shipCity" className="text-base leading-8">
                      City
                    </label>
                    <Field
                      name="shipCity"
                      type="text"
                      placeholder="Jackson"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="shipCity" />
                    </div>
                  </div>
                  <div className="mt-2 w-1/3 px-2">
                    <label htmlFor="shipState" className="text-base leading-8">
                      State
                    </label>
                    <Field
                      name="shipState"
                      type="text"
                      placeholder="TN"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="shipState" />
                    </div>
                  </div>
                  <div className="mt-2 w-1/3 px-2">
                    <label
                      htmlFor="shipZipCode"
                      className="text-base leading-8"
                    >
                      Zip Code
                    </label>
                    <Field
                      name="shipZipCode"
                      type="text"
                      placeholder="38305"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="shipZipCode" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-4">
                <button
                  className="glass mx-auto flex rounded-[69px] bg-pink-500 px-5 py-2 text-sm text-white shadow-[#fb7185] hover:bg-pink-700 focus:outline-none lg:px-8 lg:text-lg xl:text-base"
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {cartItems.length === 0 ? (
                  <div className="mt-4 text-center text-white">
                    Bag must have a product
                  </div>
                ) : null}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Payment
