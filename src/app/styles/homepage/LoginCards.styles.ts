export const LoginCardStyles = {
    containerClass : 'flex justify-center mb-20',
    gridClass : 'inline-grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8',
    cardClass : `relative max-w-xs aspect-square p-6 sm:p-8 rounded-3xl overflow-hidden group shadow-lg
    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
    dark:from-purple-700 dark:via-indigo-800 dark:to-indigo-900 text-white`,
    glowClass : `
        absolute -inset-0.5 bg-gradient-to-br from-white/10 to-white/5 blur-xl 
        rounded-3xl z-0 animate-pulse`,
    cardContentClass : `
        relative z-10 flex flex-col items-center justify-center text-center 
        h-full space-y-4`,
    shimmerClass : `
        absolute inset-0 z-0 pointer-events-none group-hover:animate-shimmer 
        bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)] 
        bg-[length:200%_100%] opacity-20`,
    buttonLoginClass : `
        flex items-center gap-2 px-4 py-2 rounded-full bg-white text-indigo-600 
        font-semibold hover:bg-gray-100 transition duration-300 
        shadow-md hover:shadow-lg text-sm`,
    buttonRegisterClass : `
        flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white 
        hover:bg-white hover:text-pink-500 transition duration-300 
        shadow-md hover:shadow-lg text-sm`
}