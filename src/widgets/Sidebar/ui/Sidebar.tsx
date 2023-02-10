import { useState, FC } from 'react'
import cls from './Sidebar.module.scss'
import {classNames} from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'features';

interface SidebarProps {
 className?: string;
  
}

export const Sidebar: FC<SidebarProps> = ({ className  = '' }: SidebarProps) => {
  const [ collapsed, setCollapsed ] = useState(false);

  const toggleHandle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <aside className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
     <Button onClick={toggleHandle}>
      Toggle
     </Button>
     <ThemeSwitcher/>
    </aside>
  )
}