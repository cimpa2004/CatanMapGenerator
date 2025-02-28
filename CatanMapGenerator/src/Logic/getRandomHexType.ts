/**
 * Used to create a random map 
 * @param hexTypes 
 * @param remainingFieldNumber 
 * @returns a random hex type from the available hex types
 */
export function getRandomHexType(hexTypes: string[], remainingFieldNumber: Map<string, number>): string {
    const availableHexTypes = hexTypes.filter(type => remainingFieldNumber.get(type) > 0);
    const randomIndex = Math.floor(Math.random() * availableHexTypes.length);
    return availableHexTypes[randomIndex];
}