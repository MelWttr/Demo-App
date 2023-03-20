/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable i18next/no-literal-string */
import React, {
    FC,
    ReactNode,
    useState,
    useMemo,
    useEffect,
    useRef,
    useCallback,
    MutableRefObject,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    onClose: Function;
    isOpen: boolean;
}

const ANIMATION_TIMEOUT = 250;

export const Modal: FC<ModalProps> = ({
    children,
    isOpen,
    onClose,
    className = '',
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        setIsOpening(false);
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose?.();
            setIsClosing(false);
        }, ANIMATION_TIMEOUT);
    }, [onClose]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        };
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = useMemo(() => ({
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls.isOpening]: isOpening,
    }), [isOpen, isClosing, isOpening]);

    return (isOpen
        ? (
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>

                    <div
                        className={classNames(cls.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>

                </div>
            </div>
        )
        : null
    );
};
