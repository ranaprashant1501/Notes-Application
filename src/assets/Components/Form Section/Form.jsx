import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";


const Form = (props) => {
    return (
        <div className="bg-gray-600  lg:h-screen h-[68vh] lg:w-1/2 p-10 ">
            <h1 className="text-4xl text-[#C9CEBD] font-bold mb-5 tracking-wider">Create Your Note</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    
                    const copyNotes = [...props.notes];

                    copyNotes.push({
                        heading: props.heading,
                        details: props.details
                    })

                    props.setNotes(copyNotes);
                    
                    props.onHeadingChange('');
                    props.onDetailsChanging('');
                }}
                className="flex flex-col">

                <Input heading={props.heading} onHeadingChange={props.onHeadingChange} />

                <TextArea details={props.details} onDetailsChanging={props.onDetailsChanging}/>

                <Button />

            </form>
        </div>
    )
}

export default Form
