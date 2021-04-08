import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Index = () => {
  return (
    <Wrapper>
      <p>Hello world</p>
      <p>this is a new tutorial.</p>
    </Wrapper>
  );
};

export default Index;
