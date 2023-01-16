import styled from '@emotion/styled';
import { StyledHelloContainerProps } from './types';

export const StyledHelloContainer = styled.section<StyledHelloContainerProps>`
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}`}) {
    font-size: 20px;
  }

  p {
    display: flex;
    span {
      margin-left: 10px;
      display: ${({ $isDisplayName }) => ($isDisplayName ? 'block' : 'none')};
      font-weight: 700;
    }
  }
`;
