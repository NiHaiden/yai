import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const client = new QueryClient();
export const Route = createRootRoute({
    component: () => (
        <>
            <QueryClientProvider client={client}>
                <Outlet/>
                <TanStackRouterDevtools/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </>
    ),
})