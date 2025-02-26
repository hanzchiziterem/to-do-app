const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                Logo
            </div>
            
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Pricing</li>
            </ul>   

            <div className="nav-buttons">
                <button className="btn">Login</button>
                <button className="btn">Signu Up</button>
            </div>       
        </nav>
    );
}

export default Navbar;