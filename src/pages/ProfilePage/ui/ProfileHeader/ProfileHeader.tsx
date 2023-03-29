import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileForm, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
 className?: string;

}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }: ProfileHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    // const formData = useSelector(getProfileForm);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('User Profile')} />
            {
                readonly ? (
                    <Button onClick={onEdit} className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                        {t('Edit')}
                    </Button>
                ) : (
                    <>
                        <Button onClick={onCancelEdit} className={cls.editBtn} theme={ButtonTheme.RED_OUTLINE}>
                            {t('Cancel')}
                        </Button>
                        <Button onClick={onSave} className={cls.saveBtn} theme={ButtonTheme.OUTLINE}>
                            {t('Save')}
                        </Button>
                    </>
                )
            }
        </div>
    );
};
