import * as React from "react"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Progress} from "@/components/ui/progress";
import { ArrowUpIcon } from '@radix-ui/react-icons'

export function PlayerCard() {
    return (
        <Card className="w-[320px] shadow bg-cover bg-center border border-gray-500 rounded-lg"
              style={{
            backgroundImage: 'url("/src/assets/soccer_card_bg_no_border_red.png")',
        }}>
            <CardHeader className="grid grid-cols-9 text-center">
                <span className="col-span-2">
                    <Avatar>
                        <AvatarImage src={"/src/assets/head_1.png"} alt="@shadcn" />
                        <AvatarFallback>FU</AvatarFallback>
                    </Avatar>
                </span>
                <div className="col-span-7 ">
                    <CardTitle>Jayson Jackson</CardTitle>
                    <p className="text-xs text-foreground">Hamburger SV</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 text-center mb-4">
                    <div>
                        <CardTitle className="text-2xl font-bold">24</CardTitle>
                        <p className="text-xs text-muted-foreground">Age</p>
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold text-center">7</CardTitle>
                        <p className="text-xs text-muted-foreground">Number</p>
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold text-center">L</CardTitle>
                        <p className="text-xs text-muted-foreground">footed</p>
                    </div>
                </div>
                <div className="mb-4">
                    <Progress value={70} className="w-[90%]" />
                    <div className="flex justify-between">
                        <p className="text-xs text-foreground">Offense</p>
                        <p className="text-xs text-foreground">70</p>
                    </div>
                </div>
                <div className="mb-4">
                    <Progress value={60} className="w-[90%]" />
                    <div className="flex justify-between">
                        <p className="text-xs text-foreground">Defense</p>
                        <p className="text-xs text-foreground">60</p>
                    </div>
                </div>
                <div className="mb-4">
                    <Progress value={82} className="w-[90%]" />
                    <div className="flex justify-between">
                        <p className="text-xs text-foreground">Tactical</p>
                        <p className="text-xs text-foreground">82</p>
                    </div>
                </div>
                <div>
                    <Progress value={79} className="w-[90%]" />
                    <div className="flex justify-between">
                        <p className="text-xs text-foreground">Technik</p>
                        <p className="text-xs text-foreground">79</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between text-center">
                <div className="flex justify-between items-center">
                    <Avatar className="mr-2">
                        <AvatarImage src={"/src/assets/fut_coin_prod.png"} alt="fut_coin" />
                        <AvatarFallback>CO</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="mt-4">3.000.000</p>
                        <p className="text-xs text-muted-foreground">coin</p>
                    </div>

                </div>
                <div>
                    <ArrowUpIcon className="text-green-500 w-[35px] h-[35px]"></ArrowUpIcon>
                </div>
                <div className="flex-col">
                    <CardTitle className="w-[10%] text-2xl font-bold">7600</CardTitle>
                    <p className="text-xs text-muted-foreground">XP</p>
                </div>
            </CardFooter>
        </Card>
    )
}
