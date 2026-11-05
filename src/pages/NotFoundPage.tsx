import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className="page">
      <h2 className="page__title">404 – Page not found</h2>
      <p className="page__text">
        Sorry, we couldn't find the page you were looking for.
      </p>
      <Link className="page__link" to="/">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
