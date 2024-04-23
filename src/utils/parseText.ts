export const parseText = (text: string) => {
    if(!text) return;
    return text.toLowerCase().replace(' ', '-')
}