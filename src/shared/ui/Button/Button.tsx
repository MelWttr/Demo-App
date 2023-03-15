import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted',
    INVERTED = 'inverted'
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
 disabled?: boolean;
 children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className = '',
        children,
        theme = '',
        onClick,
        disabled,
        square = false,
        size = ButtonSize.M,
        ...other
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: Boolean(theme),
        [cls.square]: square,
        [cls.disabled]: !!disabled,

    };
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={classNames(cls.button, mods, [className, cls[size]])}
            {...other}
        >
            {children}
        </button>
    );
});
