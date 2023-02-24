import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    'M' = 'size-m',
    'L' = 'size-l',
    'XL'= 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 className?: string;
 theme?: ButtonTheme;
 square?: boolean;
 size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className = '',
        children,
        theme = '',
        onClick,
        square = false,
        size = ButtonSize['M'], 
        ...other
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: Boolean(theme),
        [cls.square]: square,

    }
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(cls.button, mods, [className, cls[size]])}
            {...other}
        >
            {children}
        </button>
    );
};
