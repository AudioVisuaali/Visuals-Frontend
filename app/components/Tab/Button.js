import styled from 'styled-components';
import device from 'styles/device';

const color = p => {
  if (p.selected) {
    return p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.dark[900];
  }

  return p.theme.isDark ? p.theme.whiteRGBA[70] : p.theme.grey[700];
};
const hoverColor = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.dark[900];
const svgHoverColor = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const Button = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: ${color};
  padding: 14px 22px;
  user-select: none;

  transition-property: background-color, color;
  transition-duration: 200ms;

  & svg {
    width: 12px;
    color: 'inherit';
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:hover:not(:disabled) {
    color: ${hoverColor};

    & svg {
      width: 12px;
      color: ${svgHoverColor};
    }
  }

  @media screen and (${device.tablet}) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (${device.mobileL}) {
    font-size: 12px;
    padding: 8px 8px;
  }
`;

export default Button;
