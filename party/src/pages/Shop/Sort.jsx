import React from 'react'

const Sort = () => {
  return (
    <div className='text-white flex'>
      <h2>Showing # results out of ###</h2>
      <h2>Sort By</h2>
      <ul>
        <li>Top Rated</li>
        <li>Price - low to high</li>
        <li>Price - high to low</li>
        <li>A-Z</li>
        <li>Z-A</li>
      </ul>
      <h2>Breadcrumbs</h2>
      <h2>filter chips</h2>
    </div>
  )
}

export default Sort