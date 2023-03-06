/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { t } from 'i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.INVERTED} onClick={onOpenModal}>
                {t('Enter')}
            </Button>
            <Portal>
                <LoginModal onClose={onCloseModal} isOpen={isOpen} />

            </Portal>
        </div>
    );
};
