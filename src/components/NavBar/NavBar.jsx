import { Link } from 'react-scroll';
import './NavBar.css'

const NavBar = () => {
    return (        
    <nav className="navbar">
      <h2 className='logo'>Helen Pastras</h2>
        <ul className="nav-links">
          {['About', 'Playbook', 'Music', 'Resume', 'Contact'].map((section) => (
            <li key={section}>
              <Link to={section.toLowerCase()} smooth duration={500}>
                {section}
              </Link>
            </li>
          ))}
        </ul>
    </nav>
    );
};

export default NavBar;