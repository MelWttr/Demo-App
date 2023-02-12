import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, children, theme = AppLinkTheme.PRIMARY, className = '', ...other
    } = props;
    return (
        <Link to={to} className={classNames(cls.appLink, {}, [cls[theme], className])} {...other}>
            {children}
        </Link>
    );
};
