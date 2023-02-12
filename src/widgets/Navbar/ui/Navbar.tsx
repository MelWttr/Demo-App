import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className = '' }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">О сайте</AppLink>
    </div>
);
