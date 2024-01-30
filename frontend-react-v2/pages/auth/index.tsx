import AuthContainer from 'app/component/auth/Auth.container';
import AuthLayout from 'layout/AuthLayout';
import { NextPage } from 'next';
import {ReactElement, ReactNode} from 'react';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

const Auth : NextPageWithLayout = () => {
    return <AuthContainer />
}


Auth.getLayout = function getLayout(page: ReactNode) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default Auth;
