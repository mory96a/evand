import React from "react";
import StyledCard from "./Card.styles";

type Props = {
  color?: string,
  height?: number | string,
  width?: number | string,
  border?: number | string,
  className?: string,
  imageUrl?: string,
  children: Element
};

const Card = ({ className, children, ...restProps }: Props) => {
  return (
      <StyledCard className={className} {...restProps}>
        {children}
      </StyledCard>
  );
};

export default Card;