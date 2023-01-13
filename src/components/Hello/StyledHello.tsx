import styled from '@emotion/styled';
import { StyledHelloContainerProps } from './types';

export const StyledHelloContainer = styled.section<StyledHelloContainerProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}`}) {
    background: pink;
  }

  p {
    span {
      display: ${({ $isDisplayName }) => ($isDisplayName ? 'block' : 'none')};
    }
  }
`;
