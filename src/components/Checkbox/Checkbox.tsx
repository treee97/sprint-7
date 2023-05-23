import React from 'react';
import styled from 'styled-components';

type checkboxProp = {
    text: string;
    // price: number;
}
const Checkbox = ({text}: checkboxProp) => {
  return (
    <div>
        <input type="checkbox" />{text}
    </div>
  )
}

export default Checkbox