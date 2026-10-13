import { useState } from "react"
import Form from "./assets/Components/Form Section/Form"
import Section2 from "./assets/Components/Notes Section/Section2"

const App = () => {

  const [title, setTitle] = useState('');
  const [details,setDetails] = useState('');
  const [notes, setNotes] = useState([]);       


  return (
    <div className="flex lg:flex-row flex-col">

      <Form heading={title} onHeadingChange={setTitle} details={details} onDetailsChanging={setDetails} notes={notes} setNotes={setNotes}/>

      <Section2 notes={notes} setNotes={setNotes}/>

    </div>
  )
}

export default App
