
import { Link } from "react-router-dom"

import TrackerInput from '../../components/trackerInput'

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

            <TrackerInput page="landing" apiKey="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" />
        </>
    )
}

export default Landing