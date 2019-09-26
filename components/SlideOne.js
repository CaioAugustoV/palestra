import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainLayout from './common/MainLayout';
import { Title, SubTitle } from './common/ThemeTexts';
import { useKeyPress } from './common/KeyPress';
import Github from '../static/img/github-logo.svg';

const Container = styled.div``;

export default function components() {
  const [Position, setPosition] = useState(0);
  const Press = useKeyPress('Enter');

  useEffect(() => {
    if (Press) setPosition(Position + 1);
  }, [Press])

  console.log(Position)
  return (
    <MainLayout>
      <Title activeIndicator={Position == 0} active={Position >= 5 ? false : Position >= 0}>Caio Augusto</Title>
      <SubTitle activeIndicator={Position == 1} active={Position >= 5 ? false : Position >= 1}>Web Developer/Mobile Developer</SubTitle>
      <SubTitle activeIndicator={Position == 2} active={Position >= 5 ? false : Position >= 2}>Github: caioaugustov</SubTitle>
      <SubTitle activeIndicator={Position == 3} active={Position >= 5 ? false : Position >= 3}>Linkedin: Caio Augusto</SubTitle>
      <SubTitle activeIndicator={Position == 4} active={Position >= 5 ? false : Position >= 4}>clear</SubTitle>
    </MainLayout>
  )
}
