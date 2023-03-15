import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({
    className = '',
    short,
}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggle} className={classNames(cls.langSwitcher, {}, [className])}>
            {t(short ? 'Trans' : 'Translate')}
        </Button>
    );
});
