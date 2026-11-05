import { useState } from 'react';
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react';
import Button from './ui/Button';
import TextField from './ui/TextField';
import { validateSignup } from '../lib/validateSignup';
import type { SignupValues } from '../lib/validateSignup';
import type { CampusEvent } from '../data/events';

type EventSignupFormProps = {
  event: CampusEvent;
};

type Touched = Partial<Record<keyof SignupValues, boolean>>;
type Booking = { tickets: number; name: string };

const emptyValues: SignupValues = { fullName: '', email: '', tickets: '1' };

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(emptyValues);
  const [touched, setTouched] = useState<Touched>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [booking, setBooking] = useState<Booking | null>(null);

  const errors = validateSignup(values, seatsLeft);

  // show an error only after the field was left, or after a submit attempt
  function errorFor(field: keyof SignupValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  function handleChange(changeEvent: ChangeEvent<HTMLInputElement>) {
    const { name, value } = changeEvent.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(blurEvent: FocusEvent<HTMLInputElement>) {
    const { name } = blurEvent.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(submitEvent: SubmitEvent<HTMLFormElement>) {
    submitEvent.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const tickets = Number(values.tickets);
    setSeatsLeft(seatsLeft - tickets);
    setBooking({ tickets, name: values.fullName.trim() });
    setValues(emptyValues);
    setTouched({});
    setSubmitAttempted(false);
  }

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      {booking && (
        <p role="status">
          Booked: {booking.tickets} for {booking.name}.
        </p>
      )}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
    </div>
  );
}

export default EventSignupForm;
