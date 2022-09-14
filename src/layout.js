import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';

export const Layout = () => {
    return (
        <div>
            <nav id="nav-bar">
                <ul>
                    <li>
                        <NavLink to="/" className="tab">Random</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/myFacts" className="tab">My Facts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/date" className="tab">Date</NavLink>
                    </li>
                    <li>
                        <NavLink to="/year" className="tab">Year</NavLink>
                    </li>
                    <li>
                        <NavLink to="/math" className="tab">Math</NavLink>
                    </li>
                    <li>
                        <NavLink to="/trivia" className="tab">Trivia</NavLink>
                    </li>   
                </ul>
            </nav>
            <Outlet />
        </div>
    )


}

