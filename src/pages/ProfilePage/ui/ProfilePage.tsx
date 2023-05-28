import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ProfilePage.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    profileReducer,
    ProfileCard,
    getProfileForm,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';

interface ProfilePageProps {
 className?: string;

}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className = '' }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const errors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{id: string}>();

    const validateErrorTranslation = {
        [ValidateProfileError.SERVER_ERROR]: t('serverEror'),
        [ValidateProfileError.INCORRECT_AGE]: t('incorrectAge'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrectCountry'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUserData'),
        [ValidateProfileError.NO_DATA]: t('noData'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileForm({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileForm({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileForm({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileForm({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileForm({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfileForm({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfileForm({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfileForm({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileHeader />
                {errors?.length && errors.map((error) => (
                    <Text key={error} theme={TextTheme.ERROR} text={validateErrorTranslation[error]} />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
