declare module 'use-sound' {
    type UseSound = (...args: unknown[]) => [() => void, { stop: () => void }];
    const useSound: UseSound;
    export default useSound;
}