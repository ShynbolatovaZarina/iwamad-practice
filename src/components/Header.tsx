import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <h1>{title}</h1>
      <nav className="site-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <span className="site-header__likes">♥ {likes}</span>
    </header>
  );
}

export default Header;
