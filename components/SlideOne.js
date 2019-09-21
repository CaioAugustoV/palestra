import React from 'react';
import styled from 'styled-components';
import MainLayout from './common/MainLayout';
import { Title, SubTitle } from './common/ThemeTexts';
import { useKeyPress } from './common/KeyPress';

const Container = styled.div``;

export default function components() {
  const Press = useKeyPress('Enter');
  return (
    <MainLayout>
      <Title activeIndicator={!Press}>Caio Augusto</Title>
      <SubTitle active={Press}>Web Developer/Mobile Developer</SubTitle>
    </MainLayout>
  )
}
