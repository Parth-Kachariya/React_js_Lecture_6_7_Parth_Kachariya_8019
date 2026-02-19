import React from 'react'
import Leftcontant from './Leftcontant'
import Rightcontent from './Rightcontent'

const Page1Content = (props) => {
  // console.log(props.data)
  return (
    <div className=' mt-10 h-[80vh]  flex gap-6'>
      <Leftcontant/>
      <Rightcontent person={props.data}/>
      
    </div>
  )
}

export default Page1Content
