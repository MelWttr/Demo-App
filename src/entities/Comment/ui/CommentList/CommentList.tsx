import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface CommentListProps {
 className?: string;

}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div>
            Item
        </div>
    );
});
