import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';

export const Layout = () => {
    return (
        <div>
            <nav id="nav-bar">
                <ul>
                    <li>
                        <NavLink to="/" className="tab">Home</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/myFacts" className="tab">My Facts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/date" className="tab">date</NavLink>
                    </li>
                    <li>
                        <NavLink to="/year" className="tab">year</NavLink>
                    </li>
                    <li>
                        <NavLink to="/math" className="tab">math</NavLink>
                    </li>
                    <li>
                        <NavLink to="/trivia" className="tab">trivia</NavLink>
                    </li>   
                </ul>
            </nav>
            <Outlet />
        </div>
    )


}

