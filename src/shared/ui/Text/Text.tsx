import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        text,
        title,
        className = '',
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className, cls[theme], cls[align]])}>
            {title ? <p className={cls.title}>{title}</p> : null}
            {text ? <p className={cls.paragraph}>{text}</p> : null}
        </div>
    );
});
