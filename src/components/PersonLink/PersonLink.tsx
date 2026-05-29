import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface PersonLinkProps {
  name: string;
  sex: string;
  to: string;
}

export const PersonLink: React.FC<PersonLinkProps> = ({ name, sex, to }) => {
  return (
    <Link
      to={`/people/${to}`}
      className={cn({
        'has-text-danger': sex === 'f',
      })}
    >
      {name}
    </Link>
  );
};
