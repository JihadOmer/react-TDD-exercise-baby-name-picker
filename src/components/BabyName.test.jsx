import React from 'react';
import { render, screen } from '@testing-library/react';
import BabyName from './BabyName';

describe('BabyName', () => {
  const myBabyName = {
    id: 1,
    name: 'Lovely',
    sex: 'f',
  };
  const myBabyName2 = {
    id: 1,
    name: 'Musa',
    sex: 'm',
  };
  it('should render the name', () => {
    render(
      <BabyName
        name={myBabyName.name}
        id={myBabyName.id}
        sex={myBabyName.sex}
      />
    );
    expect(screen.getByText('Lovely')).toBeVisible();
    expect(screen.getByText('Lovely')).toHaveClass('babyCard')
    expect(screen.getByText('Lovely')).toHaveClass('f')
  });
  it('should render the names acording to props ', () => {
    render(
      <BabyName
        name={myBabyName2.name}
        id={myBabyName2.id}
        sex={myBabyName2.sex}
      />
    );
    expect(screen.getByText('Musa')).toBeVisible();
    expect(screen.getByText('Musa')).toHaveClass('babyCard')
    expect(screen.getByText('Musa')).toHaveClass('m')
  });
});
