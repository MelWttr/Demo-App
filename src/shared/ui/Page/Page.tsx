import {
    FC, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
 className?: string;
 children: ReactNode;
 onScrollEnd?: () => void;

}

export const Page: FC<PageProps> = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <div
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </div>
    );
};
