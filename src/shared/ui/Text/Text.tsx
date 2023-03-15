import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;

}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        text,
        title,
        className = '',
        theme = TextTheme.PRIMARY,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames('', { [cls[theme]]: true }, [className])}>
            {title ? <p className={cls.title}>{title}</p> : null}
            {text ? <p className={cls.paragraph}>{text}</p> : null}
        </div>
    );
});
