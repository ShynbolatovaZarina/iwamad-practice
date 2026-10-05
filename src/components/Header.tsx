type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;