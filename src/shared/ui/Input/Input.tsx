import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string | number;
    label?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        type = 'text',
        className = '',
        value,
        label,
        autofocus,
        onChange,
        readonly,
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

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={classNames(cls.inputLabel, mods, [className])}>
            {label ? <span className={cls.labelText}>{`${label}:`}</span> : null}
            <input
                ref={inputRef}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...other}
            />
        </label>
    );
});
