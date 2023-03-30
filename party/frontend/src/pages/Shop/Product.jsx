// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// const items = [
//   {
//     id: 1,
//     title: "Item 1",
//     subtitle: "Subtitle 1",
//     description: "Description 1",
//   },
//   {
//     id: 2,
//     title: "Item 2",
//     subtitle: "Subtitle 2",
//     description: "Description 2",
//   },
//   {
//     id: 3,
//     title: "Item 3",
//     subtitle: "Subtitle 3",
//     description: "Description 3",
//   },
// ]
// const ListItem = ({ item, selectedId, setSelectedId }) => (
//   <motion.div
//     layoutId={item.id}
//     className="cursor-pointer rounded-md bg-gray-100 p-4"
//     onClick={() => setSelectedId(item.id)}
//   >
//     <motion.h5 className="text-gray-500">{item.subtitle}</motion.h5>
//     <motion.h2 className="text-2xl font-bold">{item.title}</motion.h2>
//     {selectedId === item.id && (
//       <motion.p className="mt-4 text-gray-600">{item.description}</motion.p>
//     )}
//   </motion.div>
// )
// const Modal = ({ item, setSelectedId }) => (
//   <AnimatePresence>
//     {item && (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed top-0 left-0 flex h-full w-full items-center justify-center"
//         onClick={() => setSelectedId(null)}
//       >
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -50, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           className="rounded-lg bg-white p-8 shadow-lg"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <motion.h2 className="text-2xl font-bold">{item.title}</motion.h2>
//           <motion.p className="mt-4 text-gray-600">{item.description}</motion.p>
//           <motion.button
//             onClick={() => setSelectedId(null)}
//             className="mt-4 rounded-md bg-gray-200 px-4 py-2"
//           >
//             Close
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// )
// const ProductList = () => {
//   const [selectedId, setSelectedId] = useState(null)
//   const selectedItem = items.find((item) => item.id === selectedId)
//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {items.map((item) => (
//         <ListItem
//           key={item.id}
//           item={item}
//           selectedId={selectedId}
//           setSelectedId={setSelectedId}
//         />
//       ))}
//       <Modal item={selectedItem} setSelectedId={setSelectedId} />
//     </div>
//   )
// }
// export default ProductList
// import React from "react"
// import {useState} from "react"
// import {motion} from "framer-motion"
// const Product = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="glass rounded-[69px] p-8 text-white">
//       <motion.div
//       layout onClick={() => {
//         setIsOpen((isOpen) => !isOpen)
//       }}>
//         <motion.h2><img src={props.image} alt={props.title} className="w-full" />
//       <h2>{props.title}</h2>
//       <p>Price: {props.price}</p>
//       </motion.h2>
//       {isOpen &&(
//       <motion.div>
//       <p>Rating: {props.rating}</p>
//       <p>Old Price: {props.oldPrice}</p>
//       <p>Quantity: {props.quantity}</p>
//       </motion.div>
//       )}
//       </motion.div>
//     </div>
//   )
// }
// export default Product
import React from 'react'

const Product = () => {
  return (
    <div>Product</div>
  )
}

export default Product