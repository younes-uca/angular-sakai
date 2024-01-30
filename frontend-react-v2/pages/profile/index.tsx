import { ReactElement, ReactNode } from 'react';
import ProfileContainer from 'app/component/profile/profile.component';
import Layout from 'layout/layout';
import AuthGuard from 'app/component/auth/auth-guard.component';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

const Profile: NextPageWithLayout = () => {
    return <ProfileContainer />
}

Profile.getLayout = function getLayout(page: ReactNode) {
    return (
        <AuthGuard>
            <Layout>
                {page}
            </Layout>
        </AuthGuard>
    )
}

export default Profile;
