
const Notes = (props) => {

  const newNotes = [...props.notes];

  const delNote = (idx) => {
    newNotes.splice(idx,1);
    props.setNotes(newNotes);
  }


  return (
    <div className="h-56  w-[48%] shrink-0 bg-cover bg-[url('https://img.magnific.com/free-vector/note-paper-background-with-hole-punches_78370-2344.jpg?semt=ais_hybrid&w=740&q=80')] rounded-xl flex flex-col justify-between relative lg:pl-12 pl-16 pr-2">
      <div>
        <div className="wrap-break-word lg:text-2xl text-3xl font-bold lg:pt-1 pt-2">{props.heading}</div>
        <div className=" text-gray-500 font-semibold lg:pt-2 pt-3 wrap-break-word">{props.details}</div>
      </div>

      <button 
      onClick={() => {
        delNote(props.idx);
      }} 

      className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-500 active:scale-95 hover:bg-red-700 text-white py-1 px-4 rounded-md cursor-pointer ">Delete</button>

    </div>
  )
}

export default Notes
