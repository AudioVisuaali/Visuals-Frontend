/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SettingsModal';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Settings',
  },
  changeLanguage: {
    id: `${scope}.changeLanguage`,
    defaultMessage: 'Change language',
  },
  changeUsername: {
    id: `${scope}.changeUsername`,
    defaultMessage: 'Change username',
  },
});
