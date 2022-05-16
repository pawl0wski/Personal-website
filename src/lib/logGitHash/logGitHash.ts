export default function logGitHash() {
    const gitHash = import.meta.env.VITE_GIT_HASH;

    console.log(`This app was built with commit: ${gitHash}`);
}
