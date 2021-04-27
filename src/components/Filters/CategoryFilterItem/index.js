import React from 'react';
import { CategoryFilterItemWrapper } from './styles';
import { Checkbox } from 'components';

export function CategoryFilterItem({ title }) {
  return (
    <CategoryFilterItemWrapper>
      <Checkbox />
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  );
}
