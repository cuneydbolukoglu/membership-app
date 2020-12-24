const errorMessage = (props) => {
    const resultClass = props.result ? "success" : "error"

    return(
        <div className={`error-message ${resultClass}`}>
            {props.message}
        </div>
    )
}

export default errorMessage;