import {
    FC, useCallback, memo, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
 className?: string;

}

export const LoginForm: FC<LoginFormProps> = memo(({ className = '' }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Auth')} />
            {error
                ? (
                    <Text
                        text={t('Invalid username or password')}
                        theme={TextTheme.ERROR}
                    />
                )
                : null}
            <Input autofocus label={t('Username')} onChange={onChangeUserName} value={username} />
            <Input label={t('Password')} onChange={onChangePassword} value={password} />

            <Button onClick={onLoginClick} disabled={isLoading}>
                {t('Enter')}
            </Button>
        </div>
    );
});
