import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import {classNames} from 'shared/lib/classNames'

export enum ThemeButton {

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 className?: string;
 theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className = '', children, theme, onClick, ...other }  = props;
  return (
    <button onClick={onClick} className={classNames(cls.button, {}, [className])}>
      {children}
    </button>
  )
}