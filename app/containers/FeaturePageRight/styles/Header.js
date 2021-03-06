import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark
    ? `linear-gradient(-2deg, ${p.theme.dark[600]}, ${p.theme.dark[200]} 100%);`
    : `linear-gradient(-2deg, ${p.theme.light[500]}, ${p.theme.light[100]} 100%);`;

const Header = styled.div(p => ({
  borderBottom: `1px solid ${
    p.theme.isDark ? p.theme.dark[700] : p.theme.grey[700]
  }`,
  backgroundImage: backgroundColor(p),
  position: 'relative',
}));

export default Header;
