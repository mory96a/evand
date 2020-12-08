import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styleSheets/index';

type Props = {
    type?: string,
    children: string,
    size?: string | number,
    color?: string,
    direction?: string
};

const Text = ({type, children, ...restProps}: Props) => {

    return React.createElement(
        type,
        {...restProps},
        children
    );
};

const StyledText = styled(Text)`
  font-size: ${props => props.size}px;
  direction: ${props => props.direction};
  color: ${props => colors[props.color]};
  margin: 0;
`;

Text.defaultProps = {
    type: 'span',
    color: colors.black,
    direction: 'ltr'
};

export default StyledText;