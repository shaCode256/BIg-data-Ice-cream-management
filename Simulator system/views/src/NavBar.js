import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Home
            </Link>
            <ul>
                <CustomLink to="/simulator"> Simulator</CustomLink>
                <CustomLink to="/predictor"> Predictor</CustomLink>
                <CustomLink to="/dashboard"> Dashboard</CustomLink>

            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}