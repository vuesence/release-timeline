export declare const DefaultOptions: {
    github: {
        owner: string;
        repo: string;
        token: string;
        releases: {
            feedType: string;
            url: string;
            size: number;
        };
        pulls: {
            feedType: string;
            url: string;
            size: number;
        };
        commits: {
            feedType: string;
            url: string;
            size: number;
        };
    };
    timeline: {
        paddingTop: number;
        span: number;
    };
    display: {
        releaseName: boolean;
        animatedBackground: boolean;
        animatedBackgroundForLightTheme: boolean;
        release: {
            desc: boolean;
            pulls: boolean;
            commits: boolean;
        };
    };
};
