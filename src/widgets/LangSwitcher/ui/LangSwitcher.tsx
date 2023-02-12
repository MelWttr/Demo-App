import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
 className?: string;

}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className = '' }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button onClick={toggle} className={classNames('', {}, [className])}>
            {t('Translate')}
        </Button>
    );
};
