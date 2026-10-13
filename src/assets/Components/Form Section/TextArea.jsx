

const TextArea = (props) => {
    return (
        <div>
            <textarea name="message" id="message" placeholder="Enter Details here..." value={props.details}
                onChange={(e) => {
                    props.onDetailsChanging(e.target.value);
                }}
                className="p-3 bg-white font-medium outline-none mb-5 h-48 w-full rounded">
            </textarea>
        </div>
    )
}

export default TextArea
