import { readFileSync } from 'fs'
import axios from 'axios'

const isOneLine = (str: string) => str.indexOf('\n') === -1

const isURL = (str: string) => str.startsWith('http')

export const xastXsdToTs = async (xsd: string): Promise<string> => {
  if (!isOneLine(xsd)) {
    throw new Error('Suplly a path')
  }

  if (!isURL(xsd)) {
    const xsdString = readFileSync(xsd, 'utf8')
    throw new Error("I can't do anything with this yet")
  }

  try {
    const { data } = await axios.get(xsd)
  } catch (e) {
    throw new Error(`File not found

    ${e}`)
  }

  return 'xast-xsd-to-ts'
}
