import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    authOnly?: boolean;
}
