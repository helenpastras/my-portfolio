import { Link } from 'react-scroll';
import './NavBar.css'

const NavBar = () => {
    return (        
    <nav className="navbar">
        <h2>Helen Pastras</h2>
      <div className="font-bold text-lg">Helen</div>
      <ul className="flex gap-6">
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