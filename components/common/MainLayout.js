import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: calc(100vw - 2vw);
  height: calc(100vh - 2vw);
  background: #000;
  padding: 1vw;
`;

export default function MainLayout(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}
