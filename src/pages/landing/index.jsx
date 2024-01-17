
import { Link } from "react-router-dom"

import Tracker from '../../components/tracker'

const Landing = () => {
    return (
        <>
            <div>
                Landing Page
            </div>

            <div>
                <Link to="/">Voltar para a overview</Link>
            </div>

            <div>
                <Link to="/search">Ir para a tela de pesquisa</Link>
            </div>

            <Tracker page="landing" apiKey="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" />
        </>
    )
}

export default Landing