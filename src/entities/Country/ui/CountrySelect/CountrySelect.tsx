import { FC, useCallback, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country';

interface CountrySelectProps {
 className?: string;
 value?: Country;
 onChange?: (value: Country) => void;
 readonly?: boolean;

}

const countryOptions = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={countryOptions}
            label={t('Country')}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
