import { Icons } from "@/components/icons"

interface NavItem {
    title: string
    to?: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
}

interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export const mainMenu: NavItemWithChildren[] = [
    {
        title: 'Board',
        to: '',
    },
    {
        title: 'Inspect',
        items: [
            {
                title: 'Tabelle',
                to: '/sample',
            },
            {
                title: 'Player',
                to: '/#',
            },
            {
                title: 'Team',
                to: '/#',
            },
        ]
    },
    {
        title: 'Game',
        to: 'empty',
    },
    {
        title: 'PlayOff',
        to: 'empty',
    },
]

export const sideMenu: NavItemWithChildren[] = []
