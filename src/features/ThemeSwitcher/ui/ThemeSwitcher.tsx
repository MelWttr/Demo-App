import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import ThemeIcon from 'shared/assets/icons/theme-switcher.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
 className?: string;

}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>
            <ThemeIcon fill="var(--inverted-primary-color)" />
        </Button>
    );
};
