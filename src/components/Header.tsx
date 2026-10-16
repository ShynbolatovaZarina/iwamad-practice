import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>{title}</h1>
      </div>
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
