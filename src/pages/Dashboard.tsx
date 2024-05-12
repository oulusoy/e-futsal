import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {PlayerCard} from "@/components/PlayerCard";
import {Button} from "@/components/ui/button";
import {PlusCircledIcon} from "@radix-ui/react-icons";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Player, PlayerSearchModal} from "@/components/PlayerSearchModal";
import {Match} from "@/components/Match";
import {useStore} from "@/store/store";
import {useState} from "react";

export default function Dashboard() {
    const {players} = useStore();
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
            <Card className="mt-4">
                <Match></Match>
            </Card>
        </>
    )
}
