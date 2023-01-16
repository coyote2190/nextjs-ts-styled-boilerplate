import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.yellow};
  height: 50px;
  p {
    span {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
