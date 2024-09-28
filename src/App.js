import Functioncomponents from "./function components"
import Boocomponent from "./propscomponent"
import Classcomponent from "./components/classcomponents"
import Navbar from "./components/navbar"
import UseRefcomp from "./components/userref"
import Usercomp2 from "./components/userref2"
import Context from "./components/context"
import Context2 from "./components/context2"
import Effect1 from "./components/useeffect1"
import Effect2 from "./components/useeffect2"
import Effect3 from "./components/useeffect3"
import Form from "./components/form"
import Todolist from "./components/to-do-list"


export default function App(){
  return(
    <div>
      <Functioncomponents/>
      <hr/>
      <h1><Boocomponent count="HELLO EVERYONE"/></h1>
      <hr/>

      <Classcomponent data="hello"/>
      <hr/>
      <Navbar/>
      <hr/>
      <UseRefcomp/>
      <hr/>
      <Usercomp2/>
      <hr/>
      <Context/>
      <hr/>
      <Context2/>
      <hr/>
      <Effect1/> 
      <hr/>
      <Effect2/>
      <hr/>
      <Effect3/>
      <hr/>
      <Form/>
      <Todolist/>
    </div>
  )
}