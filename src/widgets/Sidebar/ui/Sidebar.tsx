import { useState, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleHandle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t } = useTranslation();

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={toggleHandle}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.itemsWrapper}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={cls.linkIcon} />
                    <span className={cls.link}>
                        {t('Main')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.linkIcon} />
                    <span className={cls.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
};
