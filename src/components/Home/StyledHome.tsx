import styled from '@emotion/styled';

export const StyledHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    span {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
  }
`;
