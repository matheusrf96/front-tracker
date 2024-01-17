const Tracker = (props) => {
    return (
        <>
            <script id="cmp" async src={ 'http://localhost:8000/cmp' + window.location.search }></script>
            <input type="hidden" id="eh" name="eh" value={props.apiKey} />
            <input type="hidden" id="tv" name="tv" value={props.page} />
        </>
    )
}

export default Tracker
