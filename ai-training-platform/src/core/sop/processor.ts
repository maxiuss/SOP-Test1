export function processSOP(sopContent: string): string {
    // Logic to process and summarize the SOP content
    const summary = summarizeContent(sopContent);
    return summary;
}

export function summarizeContent(content: string): string {
    // Logic to create a summary of the SOP content
    // This is a placeholder for actual summarization logic
    return content.split('.').slice(0, 2).join('.') + '.';
}