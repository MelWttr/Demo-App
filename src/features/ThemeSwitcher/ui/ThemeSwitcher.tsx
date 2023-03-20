import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import ThemeIcon from 'shared/assets/icons/theme-switcher.svg';
import { Button } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
 className?: string;

}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme} className={classNames(cls.themeSwitcherBtn, {}, [className])}>
            <ThemeIcon fill="var(--inverted-primary-color)" />
        </Button>
    );
});
