import React from 'react';
import {Btn} from './Button.styles'

export default function Button({children, ...restProps}) {

  return (
    <Btn {...restProps}>{children}</Btn>
  );

};



