/**
 * Handler to convert boolean values to Brazilian language
 * @param value
 * @returns "Sim" : "Não"
 */

export const brazilianizeBooleans = (value: boolean) => (value ? "Sim" : "Não")
