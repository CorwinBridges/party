import { useState, useEffect } from "react"

import Axios from "axios"
import { motion, AnimatePresence } from "framer-motion"

import {
  Carousel,
  Search,
  Sort,
  Filter,
  Product,
  Pagination,
  Preview,
} from "../../pages"
import { PageWrapper } from "../../utils"


const Shop = () => {

  return (
    <>
      <Carousel />
      <div className="section-container">
        <Search />
      </div>
      <div className="section-container">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-5">
            <div className="mb-8">
              <Sort />
            </div>
            <Product />
          </div>
        </div>
      </div>
      <div className="section-container">
        <Pagination />
      </div>
      <div className="section-container">
        <Preview />
      </div>
    </>
  )
}

export default PageWrapper(Shop)
