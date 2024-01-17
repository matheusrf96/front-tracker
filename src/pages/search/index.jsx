
import { Link } from "react-router-dom"

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
        </>
    )
}

export default Search