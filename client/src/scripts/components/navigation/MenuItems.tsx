import LogoutIcon from '@mui/icons-material/Logout';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {ReactNode} from "react";

export type MenuItemType = {
    name: string,
    icon: ReactNode,
    href: string,
}

export const LoggedOutMenuItems: MenuItemType[] = [
    {
        name: "Start Questing",
        icon: <PlayCircleOutlineIcon/>,
        href: '/login',
    }
];

export const LoggedInMenuItems: MenuItemType[] = [
    {
        name: "Logout",
        icon: <LogoutIcon/>,
        href: '/logout',
    },
]