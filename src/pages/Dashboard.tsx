import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayerCard } from "@/components/PlayerCard";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Player, PlayerSearchModal } from "@/components/PlayerSearchModal";
import { Match } from "@/components/Match";
import { useStore } from "@/store/store";
import { useState } from "react";

export default function Dashboard() {
    const { players } = useStore();
    const data = useState(players);
    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Dashboard</PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <CardTitle>Ranked Players</CardTitle>
                    <CardDescription>Randomly choosed Players</CardDescription>
                    <div className="flex flex-wrap justify-evenly">
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                        <span className="flex-col-4 mr-2 mb-4"><PlayerCard></PlayerCard></span>
                    </div>
                </CardHeader>
            </Card>
            <Card className="mt-4" style={{
                backgroundImage: 'url("/src/assets/futsal_pitch_2.png")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <CardHeader>
                    <CardTitle>Game Introduction</CardTitle>
                    <CardDescription>Play our Fut Game with live performance stats</CardDescription>
                    <div className="flex flex-wrap justify-evenly">
                        <div className="w-full text-center">
                            <p> GK </p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <PlusCircledIcon className="h-20 w-20" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[350px]">
                                    <PlayerSearchModal data={players}></PlayerSearchModal>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="w-full text-center">
                            <p> Fixo </p>
                            <Button variant="outline" size="icon">
                                <PlusCircledIcon className="h-20 w-20" />
                            </Button>
                        </div>
                        <div className="w-full flex flex-wrap text-center">
                            <div className="w-[50%] text-center">
                                <p> Ala </p>
                                <Button variant="outline" size="icon">
                                    <PlusCircledIcon className="h-20 w-20" />
                                </Button>
                            </div>
                            <div className="w-[50%] text-center">
                                <p> Ala </p>
                                <Button variant="outline" size="icon">
                                    <PlusCircledIcon className="h-20 w-20" />
                                </Button>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <p> pivot </p>
                            <Button variant="outline" size="icon" onClick={() => console.log('hello')}>
                                <PlusCircledIcon className="h-20 w-20" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Card className="mt-4 p-4">
                <CardTitle>Last Matches</CardTitle>
                <CardDescription>Sat, 01.04.2024</CardDescription>
                <Match
                    live={true}
                    matchDate="02.03.2024"
                    matchTime="19:00"
                    teamHome="Borussia Dortmund"
                    teamAway="Bayern Munich"
                    scoreHome={2}
                    scoreAway={1}
                    timeline={[{ time: '45', team: 'Borussia Dortmund', player: 'Haaland', action: 'scored' },
                    { time: '75', team: 'Bayern Munich', player: 'Haaland', action: 'scored' },
                    { time: '85', team: 'Bayern Munich', player: 'Haaland', action: 'scored' },
                    ]}
                    squadHome={['Haaland', 'Reus', 'Hummels']}
                    squadAway={['Lewandowski', 'Müller', 'Neuer']}
                />
                <Match
                    live={false}
                    matchDate="02.03.2024"
                    matchTime="18:00"
                    teamHome="Hamburger Sv"
                    teamAway="St. Pauli"
                    scoreHome={3}
                    scoreAway={6}
                    timeline={[{ time: '30', team: 'St. Pauli', player: 'Burgstaller', action: 'scored' }]}
                    squadHome={['Ulreich', 'Leibold', 'Jatta']}
                    squadAway={['Burgstaller', 'Kyereh', 'Paqarada']}
                />
                <Match
                    live={false}
                    matchDate="01.03.2024"
                    matchTime="End"
                    teamHome="Hamburger Sv"
                    teamAway="St. Pauli"
                    scoreHome={3}
                    scoreAway={6}
                    timeline={[{ time: '75', team: 'Hamburger Sv', player: 'Terodde', action: 'scored' }]}
                    squadHome={['Ulreich', 'Leibold', 'Jatta']}
                    squadAway={['Burgstaller', 'Kyereh', 'Paqarada']}
                />
            </Card>
        </>
    )
}
