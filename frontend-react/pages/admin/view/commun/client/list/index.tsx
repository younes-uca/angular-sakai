import {ReactElement, ReactNode} from 'react';
import ClientsList from 'app/component/admin/view/commun/client/list/client-list-admin.component';
import Layout from 'layout/layout';
import AuthGuard from 'app/component/auth/auth-guard.component';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

const Clients: NextPageWithLayout = () => {
    return <ClientsList />
}

Clients.getLayout = function getLayout(page: ReactNode) {
    return (
    <AuthGuard>
        <Layout>
            {page}
        </Layout>
    </AuthGuard>
    )
}

export default Clients;
