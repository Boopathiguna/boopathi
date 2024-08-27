import Functioncomponents from "./function components"
import Boocomponent from "./propscomponent"
import Classcomponent from "./components/classcomponents"
import Navbar from "./components/navbar"
import UseRefcomp from "./components/userref"
import Usercomp2 from "./components/userref2"


export default function App(){
  return(
    <div>
      <Functioncomponents/>
      <Boocomponent count="Run baby Run"/>
      <Classcomponent data="hello"/>
      <Navbar/>
      <UseRefcomp/>
      <Usercomp2/>
    </div>
  )
}