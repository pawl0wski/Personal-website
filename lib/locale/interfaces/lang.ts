export interface LangI {
    /* General */
    firstname: string;
    lastname: string;
    fullname: string;

    /* Welcome */
    welcomeTitle: string;
    welcomeContinuationProfession: string;
    welcomeContinuationProfessionLocalization: string;

    /* Links */
    github: string;
    linkedin: string;
    branch: string;
    email: string;
    gpgKeys: string;

    /* About me */
    aboutMeTitle: string;
    aboutMeContentIntro: string;
    aboutMeContentInterests: string;
    aboutMeContentContact: string;

    /* Projects */
    projectsTitle: string;
    readMore: string;

    /* Knowledge */
    knowledgeTitle: string;
    stillLearningInfo: string;

    languages: string;
    technologies: string;
    appsServices: string;

    /* Project content */
    backToHomePage: string;
    links: string;
    repository: string;
    googlePlay: string;
    projectWebsite: string;
    description: string;

    /* GPG Keys */
    clickHereToShowPublicKey: string;
    clickHereToHidePublicKey: string;
    gpgKeysDescription: string;
    clickToShowEmail: string;

    /* Others */
    carrier: string;
    indexDescription: string;
}
