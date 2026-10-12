

const Input = (props) => {
    return (
        <div>
            <input type="text" placeholder="Enter Note's Heading" value={props.heading}
                onChange={(e) => {
                    props.onHeadingChange(e.target.value);
                }}
                className="p-3 bg-white font-medium outline-none mb-3 h-10 w-full rounded" />
            <input />
        </div>
    )
}

export default Input
