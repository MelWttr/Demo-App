import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentItem } from 'entities/Comment/model/types/commentItem';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: CommentItem;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar className={cls.avatar} size={30} src={comment.user.avatar} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
