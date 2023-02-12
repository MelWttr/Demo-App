/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.PRIMARY} to="/">{t('Main')}</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to="/about">{t('About')}</AppLink>
        </div>
    );
};
