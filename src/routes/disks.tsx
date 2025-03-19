import {invoke} from "@tauri-apps/api/core";
import {useQuery} from "@tanstack/react-query";
import {Button} from "@/components/ui/button.tsx";
import {createFileRoute, useNavigate} from "@tanstack/react-router";

export const Route = createFileRoute('/disks')({
    component: Disks,
})


export default function Disks() {

    const {data, refetch, isLoading} = useQuery({
        queryKey: ['disks'],
        queryFn: async () => {
            const data = await invoke('get_blockdevices');
            console.log(data);
            return data;
        }
    })

    const navigate = useNavigate();

    return (
        <main className={"w-dvw h-dvh flex flex-col items-center justify-center bg-zinc-950 text-white gap-5"}>
            <div>disks</div>
            <Button onClick={() => navigate({to: "/"})}>Go Back</Button>
            <div>{isLoading}</div>
            <Button onClick={() => refetch()}>Refetch</Button>
            <div>{data?.toString()}</div>
        </main>
    )
}