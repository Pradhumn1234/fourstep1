import Nav from '@/Component/Header/Nav'
import React from 'react'
const PageNotFound = () => {
  return (
    <>
    <Nav/>
    <div className='text-red-600 text-center font-bold text-2xl mt-96 lg:mt-36'>PageNotFound</div>
    <p className='text-center my-3'>Please Go Back</p>
    </>
  )
}

export default PageNotFound