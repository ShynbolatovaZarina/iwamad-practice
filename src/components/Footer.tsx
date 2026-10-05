type FooterProps = {
  text: string;
};

function Footer({ text }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>{text}</p>
    </footer>
  );
}

export default Footer;