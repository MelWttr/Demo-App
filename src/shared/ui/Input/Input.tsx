import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    memo,
    useState,
    useEffect,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    label?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        type = 'text',
        className = '',
        value,
        label,
        autofocus,
        onChange,
        ...other
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <label className={classNames(cls.inputLabel, {}, [className])}>
            {label ? <span className={cls.labelText}>{label}</span> : null}
            <input
                ref={inputRef}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...other}
            />
        </label>
    );
});
