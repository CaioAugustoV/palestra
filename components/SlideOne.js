import React from 'react';
import styled from 'styled-components';
import MainLayout from './common/MainLayout';
import { Title, SubTitle } from './common/ThemeTexts'

const Container = styled.div``;

export default function components() {
  return (
    <MainLayout>
      <Title>Titulo</Title>
      <SubTitle>SubTitulo</SubTitle>
    </MainLayout>
  )
}
