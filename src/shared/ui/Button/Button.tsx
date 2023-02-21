import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 className?: string;
 theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className = '', children, theme = '', onClick, ...other
    } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(cls.button, { [cls[theme]]: !!theme }, [className])}
            {...other}
        >
            {children}
        </button>
    );
};
