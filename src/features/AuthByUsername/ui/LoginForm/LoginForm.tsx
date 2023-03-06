import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;

}

export const LoginForm: FC<LoginFormProps> = ({ className = '' }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input autofocus label={t('Username')} />
            <Input label={t('Email')} />

            <Button>
                {t('Enter')}
            </Button>
        </div>
    );
};
