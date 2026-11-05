import { Link, useParams } from 'react-router';
import EventSignupForm from '../components/EventSignupForm';
import { events } from '../data/events';

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  if (!event) {
    return (
      <section className="page">
        <h1 className="page__title">Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to events</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <h1 className="page__title">{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.place}</p>
      <EventSignupForm key={event.id} event={event} />
      <p>
        <Link to="/events">Back to events</Link>
      </p>
    </section>
  );
}

export default EventDetailsPage;
