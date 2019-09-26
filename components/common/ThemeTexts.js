import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SeperateText } from './SeparateText'

const PulseIndicador = keyframes`
  0%   {opacity: 1;}
  25%  {opacity: .2;}
  50%  {opacity: 1;}
  75%  {opacity: .2;}
  100% {opacity: 1;}
`;

const TitleStyle = styled.h1`
  color: #00ff02;
  margin: 0;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div{
    background: #00ff02;
    height: 45px;
    width: 12px;
    margin-left: 5px;
    animation: ${PulseIndicador} 1.4s infinite;
    display: ${props => !props.indicator ? 'none' : 'block'};
  }
  span{
    font-size: 40px;
    margin-right: 10px;
  }
`;

export function Title(props) {
  return (
    <>
      {
        props.active ?
        <TitleStyle indicator={props.activeIndicator}><span>></span>{SeperateText(props.children)}<div /></TitleStyle> :
        ''
      }
    </>
  )
}

const SubTitleStyle = styled.h1`
  color: #00ff02;
  margin: 0;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div{
    background: #00ff02;
    height: 35px;
    width: 12px;
    margin-left: 5px;
    animation: ${PulseIndicador} 1.4s infinite;
    display: ${props => !props.indicator ? 'none' : 'block'};
  }
  span{
    font-size: 40px;
    margin-right: 10px;
  }
`;

export function SubTitle(props) {
  return (
    <>
      {
        props.active ?
        <SubTitleStyle indicator={props.activeIndicator}><span>></span>{SeperateText(props.children)}<div /></SubTitleStyle> :
        ''
      }
    </>
  )
}