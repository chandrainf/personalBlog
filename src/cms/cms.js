import React from 'react';
import PagePreview from './preview-templates/page-preview';
import PostPreview from './preview-templates/post-preview';
import { registerPreviewTemplate } from './CSSInjector';

// Used like
registerPreviewTemplate('pages', <PagePreview />);

registerPreviewTemplate('posts', <PostPreview />);
