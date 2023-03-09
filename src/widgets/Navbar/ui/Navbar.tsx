import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useSelector, useDispatch } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const onOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button theme={ButtonTheme.INVERTED} onClick={onLogout}>
                    {t('Exit')}
                </Button>
            </div>
        );
    }

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
