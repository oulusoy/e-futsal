import { Card } from "./ui/card";
import {
    RadiobuttonIcon
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/store"
import { useState } from "react"

interface MatchProps {
    live: boolean;
    matchDate: string;
    matchTime: string;
    teamHome: string;
    teamAway: string;
    scoreHome: number;
    scoreAway: number;
    timeline: Array<{ team: string, time: string, player: string }>;
    squadHome: Array<string>;
    squadAway: Array<string>;
}

let speechBobble;

const isLive = false;
export function Match(props: MatchProps) {
    const [open, setOpen] = useState(false);

    return <>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="flex flex-col items-center">
                <span style={{ cursor: 'pointer' }}>
                    <Badge variant={"outline"} className="text-xs text-muted-foreground mt-2" style={{
                        position: 'relative',
                        right: '-80px',
                        width: '100px'
                    }}>{props.matchDate}</Badge>
                    <Card className="mb-4 p-4 max-w-[350px] min-w-[300px]">
                        <div className="flex flex-grow justify-between">
                            <div className="flex flex-grow items-center">
                                <div className="w-[40px]">
                                    {props.live && <RadiobuttonIcon style={{ color: 'green' }}></RadiobuttonIcon>}
                                    {!props.live && <p className="text-xs text-muted-foreground">{props.matchTime}</p>}
                                </div>
                                <div>
                                    <div>
                                        <div className="text-l font-bold">{props.teamHome}</div>
                                    </div>
                                    <div>
                                        <div className="text-l font-bold">{props.teamAway}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="text-l font-bold">{props.scoreHome}</div>
                                </div>
                                <div>
                                    <div className="text-l font-bold">{props.scoreAway}</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{props.teamHome} {props.scoreHome}:{props.scoreAway} {props.teamAway}</DialogTitle>
                    <DialogDescription>
                        <div className="flex justify-between">
                            <div className="flex flex-col text-left text-s text-foreground">
                                {props.squadHome.map((player, index) => (
                                    <p key={index}>{player}</p>
                                ))}
                            </div>
                            <div className="flex flex-col text-left">
                                {props.squadAway.map((player, index) => (
                                    <p key={index}>{player}</p>
                                ))}
                            </div>
                        </div>
                        <div className="mt-1 p-1">
                            Highlights
                            {props.timeline.map((event, index) => (
                                <p key={index} className={`${event.team === props.teamHome ? "speech-bubble-left text-left" : "speech-bubble-right text-right"}`}>{event.time}min. {event.team} - {event.player} scored a goal</p>
                            ))}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>
}