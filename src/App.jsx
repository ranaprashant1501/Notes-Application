import { useState } from "react"
import Form from "./assets/Components/Form"
import Section2 from "./assets/Notes Section/Section2"

const App = () => {

  const [title, setTitle] = useState('');
  const [details,setDetails] = useState('');
  const [notes, setNotes] = useState({});       //This is where I am leaving this project right now (13-10-26)


  return (
    <div className="flex lg:flex-row flex-col">

      <Form heading={title} onHeadingChange={setTitle} details={details} onDetailsChanging={setDetails}/>

      <Section2 />

    </div>
  )
}

export default App
