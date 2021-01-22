import './navbar.css'

function Navbar() {
    return(
        <nav className="nav-bar">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">My Work</a>
                </li>
                <li>
                    <a href="#">About Me</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;