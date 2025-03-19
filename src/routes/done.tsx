import {createFileRoute} from '@tanstack/react-router'
import {CircleCheckBigIcon} from "lucide-react";

export const Route = createFileRoute('/done')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className={"w-dvw h-dvh flex flex-col items-center justify-center gap-4"}>
            <h1 className={"text-5xl font-bold inline-flex items-center gap-5"}><CircleCheckBigIcon size={48}/>The
                installation is done.</h1>
            <p className={"text-xl"}>You can now restart your computer.</p>
        </main>
    )
}
