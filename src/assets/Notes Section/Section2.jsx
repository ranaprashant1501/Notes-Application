import Notes from "./Notes"

const Section2 = (props) => {
  return (
    <div className="bg-gray-500 lg:w-1/2 border-t-4 border-gray-800 lg:border-l-4 lg:border-t-0 h-screen p-10  ">

      <h1 className="text-3xl font-bold mb-5 tracking-wider">Your Notes</h1>

      <div className="flex flex-wrap gap-5 ">

        {props.notes.map((note, index) => (
          <Notes key={index} idx={index} heading={note.heading} details={note.details} notes={props.notes} setNotes={props.setNotes}/>
        ))}

      </div>

    </div>
  )
}

export default Section2
