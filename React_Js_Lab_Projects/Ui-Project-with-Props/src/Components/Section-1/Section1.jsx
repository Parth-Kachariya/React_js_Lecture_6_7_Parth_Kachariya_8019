import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  // console.log(props.user)
  return (
    <div>
      <Navbar/>
      <Page1Content data={props.user}/>
   
    </div>
  )
}

export default Section1
