import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface CommentCardProps {
 className?: string;

}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
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
