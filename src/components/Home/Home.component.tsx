import Hello from 'components/Hello';
import { FC } from 'react';

import { StyledHomeContainer } from './StyledHome';
import { HomeProps } from './types';

const Home: FC<HomeProps> = () => (
  <StyledHomeContainer>
    <h1>
      <span>NextJs</span> Typescript Styled Boilerplate
    </h1>

    <Hello name="Yannick" />

    <p>NextJs, React, Emotion, Styled, Mui, Typescript</p>
  </StyledHomeContainer>
);

export default Home;
