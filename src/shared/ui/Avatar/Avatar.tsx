import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
    } = props;
    const { t } = useTranslation();
    return (
        <img
            src={src}
            alt={t('UserAvatar')}
            className={classNames(cls.avatar, {}, [className])}
            width={size}
            height={size}
        />
    );
};
