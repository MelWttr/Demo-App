import {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
 className?: string;
 label?: string;
 options?: SelectOption[];
 value?: string;
 onChange?: (value: string) => void;
 readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };
    const optionsList = useMemo(() => options?.map((optElem) => (
        <option
            key={optElem.value}
            className={cls.option}
            value={optElem.value}
        >
            {optElem.content}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label ? <span className={cls.label}>{label}</span> : null}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
