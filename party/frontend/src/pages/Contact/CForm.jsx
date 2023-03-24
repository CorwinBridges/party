import { Formik, Field, Form, ErrorMessage } from "formik"

import { blob } from "../../assets"

const CForm = () => {
  return (
    <section className="py-16">
      <div className="absolute -left-20 -top-20">
        <div className="relative bottom-0 z-0 h-[400px] w-[400px] rounded-[50%] bg-gradient-to-b from-[#C2A0F0]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute left-40 top-40">
        <div className="relative bottom-0 z-0 h-[300px] w-[300px] rounded-[50%] bg-gradient-to-b from-[#4C6DDF]/[0.54] to-[#E46EC7]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>

      <div className="absolute -right-10 bottom-10">
        <div className="z-0 h-[300px] w-[300px] rounded-[50%] bg-gradient-to-b from-[#71D57C] to-[#E8C483]/[0.94] opacity-[0.75] blur-[3px]" />
      </div>

      <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F2F2F2] opacity-[0.94] blur-[130px]" />

      <div className="glass relative z-10 mx-auto max-w-3xl rounded-[69px] text-white">
        <div className="p-4 xs:p-8">
          <div className="mb-8 text-center md:mb-12">
            <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              Contact Us
            </span>
            <p className="mt-4 text-xl leading-relaxed md:mt-8 lg:text-2xl xl:text-3xl">
              Questions you may have will be answered
            </p>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
            }}
          >
            <Form>
              <div className="md:mx-4">
                <div className="flex flex-wrap">
                  <div className="w-full p-2 lg:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="first_name"
                        className="text-sm leading-7"
                      ></label>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="glass w-full rounded-[69px] bg-inherit py-1 px-3 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500"
                      />
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <div className="w-full p-2 lg:w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="last_name"
                        className="text-sm leading-7"
                      ></label>

                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="glass w-full rounded-[69px] bg-inherit py-1 px-3 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500"
                      />
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative ">
                      <label
                        htmlFor="email"
                        className="text-sm leading-7"
                      ></label>

                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="glass w-full rounded-[69px] bg-inherit py-1 px-3 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500"
                      />
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="text-sm leading-7"
                      ></label>
                      <Field
                        name="message"
                        placeholder="Leave a message"
                        as="textarea"
                        className="glass h-32 w-full resize-none rounded-[25px] bg-inherit py-1 px-3 text-base leading-6 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-pink-500"
                      />
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <button
                      className="glass mx-auto flex rounded-[69px] bg-pink-500 py-2 px-5 text-sm text-white hover:bg-pink-700 focus:outline-none lg:px-8 lg:text-lg xl:text-xl"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default CForm
