
export interface IEZCodeAdalConfig{
    tenant: string;
    clientId: string;
    redirectUri: string;
    redirectPath: string;
    postLogoutRedirectUri: string;
    cacheLocation?: "localStorage" | "sessionStorage";
    endpoints: any;
}