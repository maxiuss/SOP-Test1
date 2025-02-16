export const createTrainingModule = (title: string, content: string) => {
    return {
        title,
        content,
        createdAt: new Date(),
    };
};

export const organizeTrainingModules = (modules: Array<{ title: string; content: string }>) => {
    return modules.sort((a, b) => a.title.localeCompare(b.title));
};

export const getTrainingModuleByTitle = (modules: Array<{ title: string; content: string }>, title: string) => {
    return modules.find(module => module.title === title);
};