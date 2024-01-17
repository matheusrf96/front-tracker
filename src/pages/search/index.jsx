
import { Link } from "react-router-dom"

import TrackerInput from '../../components/trackerInput'

const Search = () => {
    return (
        <>
            <div>
                Search Page
            </div>

            <div>
                <Link to="/landing">Ir para a landing page</Link>
            </div>

            <div>
                <Link to="/">Voltar para a overview</Link>
            </div>

            <TrackerInput page="search" apiKey="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" />
        </>
    )
}

export default Search