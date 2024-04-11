export function generateSlug(text: string): string{
    return text 
            .normalize("NFC")

            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()

            .replace(/[^\w\s-]/g, "")

            .replace(/\s+/g, "-");
}