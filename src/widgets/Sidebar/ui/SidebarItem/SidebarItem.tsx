import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../Sidebar/module/items';

interface SidebarItemProps {
 item: SidebarItemType;

}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.linkIcon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
