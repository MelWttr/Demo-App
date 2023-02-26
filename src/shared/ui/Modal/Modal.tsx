/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable i18next/no-literal-string */
import React, {
    FC, ReactNode, useState, useMemo, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    onClose: Function;
    isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({
    children, isOpen, onClose, className = '',
}: ModalProps) => {
    const [open, setOpen] = useState(isOpen);

    const closeHandler = () => {
        setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    });

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const onAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
        if (e.animationName === cls.closingModal) {
            onClose?.();
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const toggleOpenMod = useMemo(() => ({
        [cls.closed]: !open,
        [cls.opened]: open,
    }), [open]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={classNames(cls.modal, toggleOpenMod, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    onAnimationEnd={onAnimationEnd}
                    className={classNames(cls.content)}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
