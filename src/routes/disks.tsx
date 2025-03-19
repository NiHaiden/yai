import {invoke} from "@tauri-apps/api/core";
import {useQuery} from "@tanstack/react-query";
import {Button} from "@/components/ui/button.tsx";
import {createFileRoute, useNavigate} from "@tanstack/react-router";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ArrowLeftCircle} from "lucide-react";

export const Route = createFileRoute('/disks')({
    component: Disks,
})

function Disks() {

    const {data, refetch, isLoading} = useQuery({
        queryKey: ['disks'],
        queryFn: async () => {
            const data: string[] = await invoke('get_blockdevices');
            console.log(data);
            return data;
        }
    })

    const navigate = useNavigate();

    return (
        <main className={"w-dvw h-dvh flex flex-col items-center justify-center bg-zinc-950 text-white gap-5"}>
            <h1 className={"text-4xl font-semibold text-left"}>Disks</h1>

            <div className={"flex flex-col gap-2 w-2/3"}>
                {data?.map((disk) => {
                    const parts = disk.split('/');
                    const lastPart = parts[parts.length - 1];
                    return (
                        <Card className={"w-full"}>
                            <CardHeader>
                                <CardTitle>{lastPart}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>Disk Size: 1.8 Petabytes</div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
            <div className={"flex justify-start items-start w-2/3"}>
                <Button onClick={() => navigate({to: "/"})}><ArrowLeftCircle/>Go back to start</Button>
            </div>
        </main>
    )
}