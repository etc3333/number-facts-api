import { Outlet, NavLink } from 'react-router-dom';

import { AiOutlineFieldNumber } from 'react-icons/ai';

import './layout.css';

export const Layout = () => {
    return (
        <div>
            <nav id="nav-bar">
                <div id='nav-title'>
                    <div>
                        Number Fact Finder
                        <AiOutlineFieldNumber />
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" className="tab">My Facts</NavLink>
                    </li>
                </ul>
                <ul style={{position: "relative"}}>
                    <li style={{position: "absolute", width: "1px", height: "100%", backgroundColor: "black"}}>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/random" className="tab">Random</NavLink>
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

