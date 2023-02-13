import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Spinner from 'shared/assets/icons/spinner.svg';
import cls from './Loader.module.scss';

interface LoaderProps {
 className?: string;

}

export const Loader: FC<LoaderProps> = ({ className = '' }: LoaderProps) => (
    <div className={classNames(cls.loader, {}, [className])}>
        <Spinner fill="var(--bg-color-inverted)" />
    </div>
);
