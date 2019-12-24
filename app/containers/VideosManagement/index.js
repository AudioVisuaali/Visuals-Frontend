/**
 *
 * VideosManagement
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Add from 'containers/Add';
import History from 'containers/History';
import Queue from 'containers/Queue';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';

import Wrapper from './styles/Wrapper';
import Contents from './styles/Contents';
import MenusWrapper from './styles/MenusWrapper';
import MenuWrapper from './styles/MenuWrapper';
import messages from './messages';
import Actions from './Actions';
import FirstTimeTutorial from './FirstTimeTutorial';

const VideosManagement = ({ onRequestScroll }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getTab = key => {
    switch (key) {
      case 0:
        return <Queue />;
      case 1:
        return <Add />;

      default:
        return <History />;
    }
  };

  return (
    <Wrapper>
      <MenusWrapper>
        <MenuWrapper>
          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tab>
              <FormattedMessage {...messages.queue} />
            </Tab>
            <Tab>
              <FormattedMessage {...messages.add} />
            </Tab>
            <Tab>
              <FormattedMessage {...messages.history} />
            </Tab>
          </Tabs>
        </MenuWrapper>
        <MenuWrapper>
          <Actions />
        </MenuWrapper>
      </MenusWrapper>
      <FirstTimeTutorial onClick={onRequestScroll} />
      <Contents key={activeTab} /* forces remount for animation */>
        {getTab(activeTab)}
      </Contents>
    </Wrapper>
  );
};

VideosManagement.propTypes = {
  onRequestScroll: PropTypes.func,
};

export default VideosManagement;
