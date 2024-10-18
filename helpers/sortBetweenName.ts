/**
 * Handler for sort between name
 * @param array {Array<{ name: string }>}
 * @returns {Array}
 */

export const sortBetweenName = (array: Array<{ name: string }>) =>
  array.sort((a, b) => a.name.localeCompare(b.name))
