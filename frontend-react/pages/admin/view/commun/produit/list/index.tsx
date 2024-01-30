import {ReactElement, ReactNode} from 'react';
import ProduitsList from 'app/component/admin/view/commun/produit/list/produit-list-admin.component';
import Layout from 'layout/layout';
import AuthGuard from 'app/component/auth/auth-guard.component';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

const Produits: NextPageWithLayout = () => {
    return <ProduitsList />
}

Produits.getLayout = function getLayout(page: ReactNode) {
    return (
    <AuthGuard>
        <Layout>
            {page}
        </Layout>
    </AuthGuard>
    )
}

export default Produits;
