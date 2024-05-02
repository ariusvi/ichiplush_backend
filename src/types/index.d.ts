export type TokenData = {
    id: number;
    role: string;
};

declare global {
    // express
    namespace Express {
        export interface Request {
            tokenData: TokenData;
        }
    }
}