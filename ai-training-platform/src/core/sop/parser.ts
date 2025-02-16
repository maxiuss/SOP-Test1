export function parseSOPDocument(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        // Logic to parse the document and extract SOP content
        // This is a placeholder for actual implementation
        const sopContent = "Extracted SOP content from the document.";
        resolve(sopContent);
    });
}

export function extractRelevantContent(sopText: string): string[] {
    // Logic to extract relevant sections from the SOP text
    // This is a placeholder for actual implementation
    return sopText.split('\n').filter(line => line.trim() !== '');
}