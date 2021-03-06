import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TUTORIAL_SHOW_TABS_SCOLL_DOWN,
  getItem,
  setItem,
} from 'utils/localStorage';
import ChevronDownSVG from 'svgs/ChevronDown';

import Wrapper from './styles/Wrapper';
import Container from './styles/Container';
import RoundButton from './styles/RoundButton';

const getState = getItem(TUTORIAL_SHOW_TABS_SCOLL_DOWN) !== 'true';

const FirstTimeTutorial = ({ onClick }) => {
  const [show, setShow] = useState(getState);
  const [isVisible, setIsVisible] = useState(getState);

  const handleClick = () => {
    setIsVisible(false);
    onClick();
    setTimeout(() => setShow(false), 200);
    setItem(TUTORIAL_SHOW_TABS_SCOLL_DOWN, 'true');
  };

  if (!show) {
    return null;
  }

  return (
    <Wrapper>
      <Container>
        <RoundButton visible={isVisible} onClick={handleClick}>
          <ChevronDownSVG />
        </RoundButton>
      </Container>
    </Wrapper>
  );
};

FirstTimeTutorial.propTypes = {
  onClick: PropTypes.func,
};

export default FirstTimeTutorial;
