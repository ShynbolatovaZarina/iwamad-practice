import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <article className={className ? `card ${className}` : 'card'}>
      {children}
    </article>
  );
}

export default Card;
