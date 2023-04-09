import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'widgets/Loader/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect, Currency } from 'entities/Currency';
import { CountrySelect, Country } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
 className?: string;
 data?: Profile;
 error?: string;
 isLoading?: boolean;
 readonly?: boolean;
 onChangeFirstname?: (value?: string) => void
 onChangeLastname?: (value?: string) => void
 onChangeAge?: (value?: string) => void
 onChangeCity?: (value?: string) => void
 onChangeAvatar?: (value?: string) => void
 onChangeUsername?: (value?: string) => void
 onChangeCurrency?: (value?: Currency) => void
 onChangeCountry?: (value?: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />

            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('errorOccured')}
                    text={t('updatePage')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.userData}>

                {data?.avatar
                    ? (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} />
                        </div>
                    )
                    : null}
                <Input
                    label={t('Firstname')}
                    className={cls.userInput}
                    value={data?.first}
                    placeholder={t('Your firstname')}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    label={t('Lastname')}
                    className={cls.userInput}
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    label={t('Age')}
                    className={cls.userInput}
                    value={data?.age}
                    placeholder={t('Your age')}
                    readonly={readonly}
                    onChange={onChangeAge}
                    type="number"
                />
                <Input
                    label={t('City')}
                    className={cls.userInput}
                    value={data?.city}
                    placeholder={t('Your city')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    label={t('Username')}
                    className={cls.userInput}
                    value={data?.username}
                    placeholder={t('Your username')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    label={t('Avatar')}
                    className={cls.userInput}
                    value={data?.avatar}
                    placeholder={t('Your avatar')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.userInput}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.userInput}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
