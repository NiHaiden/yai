import {createFileRoute, useNavigate} from "@tanstack/react-router";
import {Button} from "@/components/ui/button.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const navigate = useNavigate();
    return (
        <main className={"w-dvw h-dvh flex flex-col items-center justify-center bg-zinc-950 text-white gap-5"}>
            <img src={"/achillobator.webp"} alt={"logo"} width={250}/>
            <h1 className={"text-4xl font-semibold "}>Welcome to the Bluefin Installer.</h1>
            <p>You're just a few clicks away from a fresh Bluefin installation.</p>
            <Button variant={"outline"} className={"text-black"} onClick={() => navigate({to: "/disks"})}>Get started</Button>
        </main>
    )
}