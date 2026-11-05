import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

function Button({ variant = 'primary', className, ...rest }: ButtonProps) {
  const classes = className
    ? `btn btn--${variant} ${className}`
    : `btn btn--${variant}`;

  return <button type="button" className={classes} {...rest} />;
}

export default Button;
