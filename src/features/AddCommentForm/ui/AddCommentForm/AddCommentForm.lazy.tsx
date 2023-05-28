import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import { lazy, FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(
    () => lazyLoadingTimeout(import('./AddCommentForm'), 1000),
);
