import styled from "styled-components";
import {ContainerStyled} from '../../styles/utilities/Container'

import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

export const ContainerFooter = styled(ContainerStyled)`
  display: flex;
  max-height: 100%;
  height: auto;
  flex-direction: column;
  

`;

export const CallComponentIcon = styled(CallIcon)`
width: 45px;
height: 45px;
margin-right: 5px;
`;

export const HouseComponentIcon = styled(HomeIcon)`
width: 45px;
height: 45px;
margin-right: 5px;
`;