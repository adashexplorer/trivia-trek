export const TestimonialsStyles = {
    sectionStyles : "mb-12 text-center",
    cardStyles : "max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow",
    avatarStyles : "w-16 h-16 rounded-full mx-auto mb-4",
    quoteStyles : "text-lg italic",
    nameStyles : "mt-2 font-semibold",
    dotContainerStyles : "mt-4 flex justify-center space-x-2",
    dotStyles : (isActive: boolean) =>
        `w-3 h-3 rounded-full ${isActive ? "bg-indigo-600" : "bg-gray-400"}`
}
