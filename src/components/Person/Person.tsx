import React from 'react';
import { Person as PersonType } from '../../types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { PersonLink } from '../PersonLink';

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
          <PersonLink
            name={person.mother.name}
            sex={person.mother.sex}
            to={person.mother.slug}
          />
        ) : (
          person.motherName || '-'
        )}
      </td>
      <td>
        {person.father ? (
          <PersonLink
            name={person.father.name}
            sex={person.father.sex}
            to={person.father.slug}
          />
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
