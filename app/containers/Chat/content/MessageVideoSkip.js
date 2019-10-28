import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';

const MessageVideoSkip = ({ message }) =>
  message.content ? (
    <Wrapper>
      <FormattedMessage {...messages.skipped} />,{' '}
      <FormattedMessage {...messages.nowPlaying} />{' '}
      <A href={message.content.url}>
        <Bolded>{message.content.title}</Bolded>
      </A>
    </Wrapper>
  ) : (
    <Wrapper>
      <FormattedMessage {...messages.skipped} />
    </Wrapper>
  );

MessageVideoSkip.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageVideoSkip;