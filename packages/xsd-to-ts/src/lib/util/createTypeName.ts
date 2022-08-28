/**
 * Replace all '(_|-)\w' with capital letter and capitalize first letter.
 */

export const createTypeName = (text: string) =>
  text
    .replace(/(?:_|-)(\w)/g, (_, match) => match.toUpperCase())
    .charAt(0)
    .toUpperCase() + text.slice(1)
