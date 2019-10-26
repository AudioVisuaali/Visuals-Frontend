/**
 *
 * ChatTextField
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import messages, { placeholderId } from './messages';
import TextArea from './styles/TextArea';
import Wrapper from './styles/Wrapper';
import Actions from './styles/Actions';
import Send from './styles/Send';

function ChatTextField({ onSend, intl }) {
  const placeholder = intl.formatMessage({ id: placeholderId });
  const [textArea, setTextArea] = useState('');

  const isSendMessageDisabled = !textArea.length;

  const handleTextArea = e => {
    const { value } = e.target;
    setTextArea(value.trimLeft());
  };

  const handleSend = () => {
    if (!textArea.trim()) return;
    onSend(textArea);
    setTextArea('');
  };

  const handleKeyDown = e => {
    // Checking for enter
    if (e.keyCode !== 13) return;

    handleSend();
  };

  return (
    <Wrapper>
      <TextArea
        type="textarea"
        onKeyDown={handleKeyDown}
        value={textArea}
        onChange={handleTextArea}
        placeholder={placeholder}
      />
      <Actions>
        <Send
          type="submit"
          disabled={isSendMessageDisabled}
          onClick={handleSend}
        >
          <FormattedMessage {...messages.send} />
        </Send>
      </Actions>
    </Wrapper>
  );
}

ChatTextField.propTypes = {
  onSend: PropTypes.func.isRequired,
  intl: PropTypes.any.isRequired,
};

export default injectIntl(ChatTextField);