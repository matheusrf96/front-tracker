import { useEffect } from "react"

const Tracker = (props) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'http://localhost:8000/cmp' + window.location.search
        script.async = true

        document.body.appendChild(script)

        return () => document.body.removeChild(script)
    }, []);

    return (
        <>
            <input type="hidden" id="eh" name="eh" value={props.apiKey} />
            <input type="hidden" id="tv" name="tv" value={props.page} />
        </>
    )
}

export default Tracker
