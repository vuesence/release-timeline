export declare function loadReleases(options: any): Promise<{
    day: Date;
    release: {
        name: any;
        tag_name: any;
        published_at: any;
        author: any;
        desc: any;
        pulls: any;
        commits: any;
    };
    diff: any;
}[]>;
