import { keyframes, css } from 'styled-components';

const fadeInKeyFrame = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to {
        filter: blur(0);
        opacity: 1;
    }
`;
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`animation: ${time} ${fadeInKeyFrame} ${type};`;
};

/*const topAnimationKeyFrame = keyframes`
    from{
        top: -100px;
    }
    to{
        top: -10;
    }

`;
export const topAnimation = ({ time = '0.5s', type = 'ease' } = {}) => {
  return css`animation: ${time} ${topAnimationKeyFrame} ${type};`;
};*/
