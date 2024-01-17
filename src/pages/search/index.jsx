
import { Link } from "react-router-dom"

import Tracker from '../../components/tracker'

const Search = () => {
    return (
        <>
            <div>
                Search Page
            </div>

            <div>
                <Link to="/">Voltar para a overview</Link>
            </div>

            <div>
                <Link to="/landing">Voltar para a landing page</Link>
            </div>

            <Tracker page="search" apiKey="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" />
        </>
    )
}

export default Search