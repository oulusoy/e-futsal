import React, { createContext, useState, useContext, ReactNode } from 'react';
type Player = {
    playerId?: string,
    firstName: string,
    lastName?: string,
    position?: string,
    age?: number,
    number?: number,
    rank: number,
    xp: number,
}

interface StoreType {
    language: string;
    changeLanguage: (lang:string) => void;
    players: Player[];
    changePlayers: (players:Player[]) => void;
}

const Store = createContext<StoreType | undefined>(undefined);

export const useStore = () => {
    const context = useContext(Store);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};

interface StoreProviderProps {
    children: ReactNode; // Define children prop explicitly
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [language, setLang] = useState('de');
    const [players, setPlayers] = useState([
        {
            firstName: "John",
            lastName: "Doe",
            position: "Forward",
            age: 25,
            number: 7,
            rank: 3,
            xp: 1500
        },
        {
            firstName: "Jane",
            position: "Midfielder",
            age: 23,
            rank: 5,
            xp: 2500
        },
        {
            firstName: "James",
            lastName: "Brown",
            position: "Defender",
            age: 28,
            number: 4,
            rank: 7,
            xp: 1000
        },
        {
            firstName: "Emily",
            lastName: "Johnson",
            position: "Goalkeeper",
            age: 26,
            number: 1,
            rank: 4,
            xp: 2000
        },
        {
            firstName: "John",
            lastName: "Doe",
            position: "Forward",
            age: 25,
            number: 7,
            rank: 3,
            xp: 1500
        },
        {
            firstName: "Jane",
            position: "Midfielder",
            age: 23,
            rank: 5,
            xp: 2500
        },
        {
            firstName: "Michael",
            lastName: "Smith",
            position: "Defender",
            age: 28,
            number: 4,
            rank: 2,
            xp: 1000
        },
        {
            firstName: "John",
            lastName: "Doe",
            position: "Forward",
            age: 25,
            number: 7,
            rank: 3,
            xp: 1500
        },
        {
            firstName: "Jane",
            position: "Midfielder",
            age: 23,
            rank: 5,
            xp: 2500
        },
        {
            firstName: "Michael",
            lastName: "Smith",
            position: "Defender",
            age: 28,
            number: 4,
            rank: 2,
            xp: 1000
        },
        {
            firstName: "Emily",
            lastName: "Johnson",
            position: "Goalkeeper",
            age: 26,
            number: 1,
            rank: 4,
            xp: 2000
        },
        {
            firstName: "Emily",
            lastName: "Johnson",
            position: "Goalkeeper",
            age: 26,
            number: 1,
            rank: 4,
            xp: 2000
        },
        {
            firstName: "David",
            position: "Midfielder",
            age: 24,
            number: 10,
            rank: 1,
            xp: 3000
        }
    ]);

    const changeLanguage = (lang:string) => {
        setLang(lang);
    };

    const changePlayers = (newPlayers: Player[]) => {
        // @ts-ignore
        setPlayers(newPlayers);
    };

    return (
        <Store.Provider value={{ language, changeLanguage, players, changePlayers }}>
            {children}
        </Store.Provider>
    );
};