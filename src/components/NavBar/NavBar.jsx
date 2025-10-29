import { Link } from 'react-scroll';

const NavBar = () => {
    return (        
    <nav className="fixed top-0 w-full bg-white shadow z-50 flex justify-between px-6 py-4">
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