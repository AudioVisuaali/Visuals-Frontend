import { css, keyframes } from 'styled-components';

const fadeOut = css`
  ${keyframes`
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  `}
`;

export default fadeOut;
