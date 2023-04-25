import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

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
  rating: Yup.number()
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5")
    .required("Rating is required"),
  review: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot be longer than 500 characters")
    .required("Message is required"),
})

const initialValues = {
  firstName: "",
  lastName: "",
  rating: "",
  review: "",
}

const Review = () => {
  const [reviews, setReviews] = useState([])

  const schoolUrl = "http://10.64.32.244:6968/reviews"
  const localUrl = "http://localhost:6968/reviews"
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    let promise = null
    try {
      promise = toast.loading("Submitting review...")
      const response = await axios.post(localUrl, values)
      toast.success("Review submitted successfully!", { id: promise })
      setReviews([...reviews, response.data])
      resetForm()
    } catch (error) {
      console.error("Error submitting review to localUrl:", error)
      try {
        const response = await axios.post(schoolUrl, values)
        toast.success("Review submitted successfully!", { id: promise })
        setReviews([...reviews, response.data])
        resetForm()
      } catch (error) {
        console.error("Error submitting review to schoolUrl:", error)
        toast.error("Error submitting review", { id: promise })
      }
    } finally {
      setSubmitting(false)
    }
  }

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index + fullStars} className="text-yellow-500" />
        ))}
      </div>
    )
  }

  const fetchReviews = async () => {
    try {
      const response = await axios.get(localUrl)
      setReviews(response.data)
    } catch (error) {
      console.error("Error fetching reviews from localUrl:", error)
      try {
        const response = await axios.get(schoolUrl)
        setReviews(response.data)
      } catch (error) {
        console.error("Error fetching reviews from schoolUrl:", error)
      }
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <section className="py-16">
      {/* background circles */}
      <div className="absolute -right-20 ">
        <div className="relative bottom-0 z-0 h-[400px] w-[400px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#C2A0F0]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute right-40 ">
        <div className="relative bottom-40 z-0 h-[300px] w-[300px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#4C6DDF]/[0.54] to-[#E46EC7]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      {/* Toast */}
      <Toaster
        toastOptions={{
          success: {
            className:
              "!bg-green-500 !shadow-green-500 !rounded-full !text-white !shadow-lg !border-2 !border-white/20 !from-white/10 !to-white/0",
          },
          error: {
            className:
              "!bg-red-500 !shadow-red-500 !rounded-full !text-white !shadow-lg !border-2 !border-white/20 !from-white/10 !to-white/0",
          },
          loading: {
            className:
              "!bg-purple-500 !shadow-purple-500 !rounded-full !text-white !shadow-xl !border-2 !border-white/20 !from-white/10 !to-white/0",
          },
        }}
      />
      {/* review form */}
      <div className="glass relative z-10 mx-auto rounded-[69px] text-white">
        <div className="p-4 xs:p-8">
          <div className="mb-8 text-center">
            <span className="bg-gradient-to-bl from-purple-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent">
              Leave a Review
            </span>
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
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-purple-500 focus:ring-0 "
                    />
                    <div className="text-blue-400">
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
                      className="glass w-full rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-purple-500 focus:ring-0"
                    />
                    <div className="text-blue-400">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <label
                      htmlFor="rating"
                      className="text-sm leading-7"
                    ></label>

                    <Field
                      name="rating"
                      type="text"
                      placeholder="Rating"
                      className="glass rounded-[69px] bg-inherit px-3 py-1 leading-8 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-purple-500 focus:ring-0 lg:w-1/12"
                    />
                    <div className="text-blue-400">
                      <ErrorMessage name="rating" />
                    </div>
                  </div>
                  <div className="w-full p-2">
                    <label
                      htmlFor="review"
                      className="text-sm leading-7"
                    ></label>
                    <Field
                      name="review"
                      placeholder="Leave a message"
                      as="textarea"
                      className="glass h-32 w-full resize-none rounded-[25px] bg-inherit px-3 py-1 text-base leading-6 text-white outline-none transition-colors duration-200 ease-in-out placeholder:text-white/70 focus:border-purple-500 focus:ring-0"
                    />

                    <div className="text-blue-400">
                      <ErrorMessage name="review" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-4">
                <button
                  className="glass mx-auto flex rounded-[69px] bg-purple-500 px-5 py-2 text-sm text-white shadow-purple-400 hover:bg-purple-700 focus:outline-none lg:px-8 lg:text-lg xl:text-xl"
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

      <div className=" mt-48 bg-gradient-to-bl from-purple-500 to-blue-500 bg-clip-text pb-10 text-center text-5xl font-bold text-transparent">
        Reviews
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {[...reviews].reverse().map((review, index) => (
          <div key={index} className="glass my-4 rounded-2xl p-6 text-white">
            <h3>
              <span className="pr-3 text-red-500">Name:</span>
              {review.firstName} {review.lastName}
            </h3>
            <div className="flex items-center">
              <div className="mr-1">
                <span className="pr-3 text-red-500">Rating:</span>
                {review.rating}
              </div>
              <div>{renderStarRating(review.rating)}</div>
            </div>
            <p>
              <span className="pr-3 text-red-500">Message:</span>
              {review.review}
            </p>
          </div>
        ))}
      </div>
      {/* blur */}
      <div className="absolute -left-60 bottom-[1000px] z-0 h-[50vh] w-1/2 rounded-full bg-[#F2F2F2] opacity-[0.34] blur-[130px]" />
    </section>
  )
}
export default Review
