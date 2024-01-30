import axios, { AxiosResponse } from 'axios';

import { decode } from 'jsonwebtoken';
import { AUTH_URL } from 'layout/AppConfig';

export class AuthService {

    signIn(username: string, password: string): Promise<AxiosResponse<any>> {
        return axios.post(AUTH_URL, { username, password });
    }

    signOut() {
        this.removeToken();
    }

    getRoleConnectedUser(): string | string[] {
        const decodedJwt = this.decodeJWT();
    
        if (typeof decodedJwt === 'string') {
            // Gérer le cas où le décodage du token renvoie une chaîne de caractères
            return [];
        }
    
        return decodedJwt && decodedJwt['roles'] ? decodedJwt['roles'][0] : [];
    }
    

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }


    removeToken() {
        localStorage.removeItem('token');
    }

    getToken() {
        return localStorage.getItem('token')
    }

    decodeJWT() {
        const token = this.getToken();

        if (token) {
            try {
                const decodedToken = decode(token.replace('Bearer ', ''));
                return decodedToken;
            } catch (error) {
                console.error('Error decoding JWT:', error);
                return null;
            }
        }
        return null;
    }

    getUsername(): string | null {
        const tokenDecoded = this.decodeJWT();
    
        if (tokenDecoded === null || tokenDecoded === undefined) {
            // Gérer le cas où le décodage du token renvoie null ou undefined
            return null;
        }
    
        return typeof tokenDecoded === 'string' ? tokenDecoded : tokenDecoded.sub || null;
    }
    
    

    getExpirationFromToken(): number {
        const tokenDecoded = this.decodeJWT();
    
        if (typeof tokenDecoded === 'string') {
            // Gérer le cas où le décodage du token renvoie une chaîne de caractères
            return 0; // ou une autre valeur par défaut appropriée
        }
    
        // À ce stade, TypeScript sait que tokenDecoded est de type JwtPayload
        return tokenDecoded ? tokenDecoded.exp || 0 : 0;
    }
    
    isTokenValid(): boolean {
        const exp = this.getExpirationFromToken();
        const now = Date.now();
        return exp * 1000 > now;
    }
};
