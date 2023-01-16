import { FC } from 'react';

import { StyledPostDetailsContainer } from './StyledPostDetails';
import { PostDetailsProps } from './types';

const PostDetails: FC<PostDetailsProps> = ({ pid }) => (
  <StyledPostDetailsContainer>
    <h1>
      Params : <span>{pid}</span>
    </h1>
  </StyledPostDetailsContainer>
);

export default PostDetails;
