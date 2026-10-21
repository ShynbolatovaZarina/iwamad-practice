import { useState } from 'react';
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react';
import Button from '../components/ui/Button';
import TextField from '../components/ui/TextField';
import { validateRegistration } from '../lib/validateRegistration';
import type { RegistrationValues } from '../lib/validateRegistration';

type Touched = Partial<Record<keyof RegistrationValues, boolean>>;

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [touched, setTouched] = useState<Touched>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [registered, setRegistered] = useState(false);

  const errors = validateRegistration(values);

  // an error is shown only after the field was left, or after a submit attempt
  function errorFor(field: keyof RegistrationValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      setRegistered(true);
    }
  }

  if (registered) {
    return (
      <section className="page">
        <h2 className="page__title">Register</h2>
        <p role="status">Thanks, {values.fullName}. You are registered.</p>
      </section>
    );
  }

  const termsError = errorFor('acceptTerms');

  return (
    <section className="page">
      <h2 className="page__title">Register</h2>
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
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('password')}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('confirmPassword')}
        />

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={termsError ? true : undefined}
              aria-describedby={termsError ? 'acceptTerms-error' : undefined}
            />
            I accept the terms
          </label>
          {termsError && (
            <p id="acceptTerms-error" className="field-error">
              {termsError}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </section>
  );
}

export default RegisterPage;
