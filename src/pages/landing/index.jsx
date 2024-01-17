
import { Link } from "react-router-dom"

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
        </>
    )
}

export default Landing