/*
 * Base64Tutorial Messages
 *
 * This contains all the text for the Base64Tutorial container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Base64Tutorial';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Base64 links',
  },
  videoInputFieldLabel: {
    id: `${scope}.videoInputFieldLabel`,
    defaultMessage: 'Video URL',
  },
  translationFieldURL: {
    id: `${scope}.translationFieldURL`,
    defaultMessage: 'Translation URL',
  },
  jsonPreview: {
    id: `${scope}.jsonPreview`,
    defaultMessage: 'JSON preview',
  },
  base64Preview: {
    id: `${scope}.base64Preview`,
    defaultMessage: 'Base64 preview',
  },
  videoTitle: {
    id: `${scope}.videoTitle`,
    defaultMessage: 'Video title',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: `Base64 links allow you to share videos with links and subtitles without sending multiple links. The title of the video will be the filename.`,
  },
  descriptionConvertedWith: {
    id: `${scope}.descriptionConvertedWith`,
    defaultMessage: `Converted by using`,
  },
  descriptionAnd: {
    id: `${scope}.descriptionAnd`,
    defaultMessage: `and`,
  },
  filesOnly: {
    id: `${scope}.filesOnly`,
    defaultMessage: 'Files only',
  },
  videosOnly: {
    id: `${scope}.videosOnly`,
    defaultMessage: 'Videos only',
  },
});
