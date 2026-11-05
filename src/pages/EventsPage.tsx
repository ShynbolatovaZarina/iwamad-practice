import EventCard from '../components/EventCard';
import { events } from '../data/events';

function EventsPage() {
  return (
    <section className="events">
      <h1 className="page__title">Events</h1>
      <div className="card-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default EventsPage;
