import toast, { Toaster } from "react-hot-toast"

import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot be longer than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot be longer than 50 characters")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot be longer than 500 characters")
    .required("Message is required"),
})

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

const onSubmit = async (values, { setSubmitting, resetForm }) => {
  const schoolUrl = "http://10.64.32.244:6968/contacts"
  const localUrl = "http://localhost:6968/contacts"
  let promise = null
  try {
    promise = toast.loading("Submitting form...")
    const response = await axios.post(localUrl || schoolUrl, values)
    toast.success("Form submitted successfully!", { id: promise })
    resetForm()
  } catch (error) {
    console.log("Error:", error)
    toast.error("Error submitting form", { id: promise })
  } finally {
    setSubmitting(false)
  }
}

const CForm = () => {
  return (
    <section className="py-16">
      {/* Toast */}
      <Toaster
        toastOptions={{
          success: {
            className:
              "bg-green-500 shadow-green-500 rounded-full text-white shadow-lg border-2 border-white/20 from-white/10 to-white/0",
          },
          error: {
            className:
              "bg-red-500 shadow-red-500 rounded-full text-white shadow-lg border-2 border-white/20 from-white/10 to-white/0",
          },
          loading: {
            className:
              "bg-purple-500 shadow-purple-500 rounded-full text-white shadow-xl border-2 border-white/20 from-white/10 to-white/0",
          },
        }}
      />
      {/* background circles */}
      <div className="absolute -left-20 -top-20">
        <div className="relative bottom-0 z-0 h-[400px] w-[400px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#C2A0F0]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute left-40 top-40">
        <div className="relative bottom-0 z-0 h-[300px] w-[300px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#4C6DDF]/[0.54] to-[#E46EC7]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>

      <div className="absolute -right-10 bottom-10">
        <div className="z-0 h-[300px] w-[300px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#71D57C] to-[#E8C483]/[0.94] opacity-[0.75] blur-[3px]" />
      </div>

      <div className="absolute right-0 top-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F2F2F2] opacity-[0.94] blur-[130px]" />

      {/* contact form */}
      <div className="glass relative z-10 mx-auto max-w-3xl rounded-[69px] text-white">
        <div className="p-4 xs:p-8">
          <div className="mb-8 text-center">
            <span className="bg-gradient-to-bl from-purple-500 to-red-500 bg-clip-text text-5xl font-bold text-transparent">
              Contact Us
            </span>
            <p className="mt-4 text-xl leading-relaxed md:mt-8 lg:text-2xl xl:text-3xl">
              Questions you may have will be answered
            </p>
          </div>
        </div>
        {/* form boxes */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="md:mx-4">
                <div className="flex flex-wrap">
                  <div className="w-full p-2 lg:w-1/2">
                    <label
                      htmlFor="first_name"
                      className="text-sm leading-7"
                    ></label>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0 "
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-1/2">
                    <label
                      htmlFor="last_name"
                      className="text-sm leading-7"
                    ></label>

                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7"
                    ></label>

                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />
                    <div className="text-pink-500">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7"
                    ></label>
                    <Field
                      name="message"
                      placeholder="Leave a message"
                      as="textarea"
                      className="glass h-32 w-full resize-none rounded-[25px] bg-inherit px-3 py-1 text-base leading-6 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
                    />

                    <div className="text-pink-500">
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-4">
                <button
                  className="glass mx-auto flex rounded-[69px] bg-pink-500 px-5 py-2 text-sm text-white shadow-[#fb7185] hover:bg-pink-700 focus:outline-none lg:px-8 lg:text-lg xl:text-xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default CForm
