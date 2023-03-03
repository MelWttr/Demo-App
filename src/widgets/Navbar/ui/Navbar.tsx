/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { t } from 'i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.INVERTED} onClick={onToggleModal}>
                {t('Enter')}
            </Button>
            <Portal>
                <Modal isOpen={isOpen} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae reiciendis modi voluptate dolore officia enim autem
                    esse delectus at distinctio repellendus quod doloribus suscipit a
                    ratione odit blanditiis ut rem natus voluptatem possimus, amet inventore placeat
                    Reprehenderit, animi! Omnis incidunt sed ipsa, hic illo rem perferendis
                    quas et atque, est ratione culpa officia repudiandae quidem exercitationem
                    expedita consequatur dolor
                    qui delectus eius voluptatibus molestias itaque quia?
                    Distinctio repudiandae saepe veniam nam explicabo
                    molestias expedita nobis reiciendis quae facilis!
                    Veniam tempore libero adipisci dolore ad corrupti
                    facere repellendus natus ullam, molestiae
                    laboriosam soluta numquam eius est nobis quae illo perferendis nulla!
                </Modal>

            </Portal>
        </div>
    );
};
