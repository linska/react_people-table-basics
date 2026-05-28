import React from 'react';
import { Person as PersonType } from '../../types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface PersonProps {
  person: PersonType;
  active: boolean;
}

export const Person: React.FC<PersonProps> = ({ person, active }) => {
  return (
    <tr
      data-cy="person"
      className={cn({
        'has-background-warning': active,
      })}
    >
      <td>
        <Link
          to={`/people/${person.slug}`}
          className={cn({
            'has-text-danger': person.sex === 'f',
          })}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.mother ? (
          <Link
            to={`/people/${person.mother.slug}`}
            className="has-text-danger"
          >
            {person.mother.name}
          </Link>
        ) : (
          person.motherName || '-'
        )}
      </td>
      <td>
        {person.father ? (
          <Link to={`/people/${person.father.slug}`}>{person.father.name}</Link>
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
