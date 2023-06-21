import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from 'entities/Article/model/types/article';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {
                viewTypes.map((viewType, index) => (
                    <Button key={index} onClick={onClick(viewType.view)}>
                        <Icon
                            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                            Svg={viewType.icon}
                        />
                    </Button>
                ))
            }
        </div>
    );
});
