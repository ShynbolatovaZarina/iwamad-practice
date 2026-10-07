function ContactPage() {
  return (
    <section className="page">
      <h2 className="page__title">Contact</h2>
      <p className="page__text">Want to get in touch? Reach me here:</p>
      <ul className="card__links gap-2">
        <li>
          <a href="mailto:shynbolatovazarina@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://github.com/ShynbolatovaZarina"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactPage;
