/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;

}

export const Navbar = ({ className = '' }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button onClick={openModal}>
                toggle
            </Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                fldnkshdhgdfhgjk dfhgkjdhgkj dhgkjfdg hkgdjhkjfdhgd kjghfdjghdfg dhjkgh
            </Modal>
        </div>
    );
};
