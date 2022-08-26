import { stringTypeSwitcher } from './stringTypeSwitcher'
import axios from 'axios'
import { readFile } from 'fs/promises'

export const getText = async (path: string) => {
  return (await stringTypeSwitcher(path, {
    filepath: async (text) => await readFile(text, 'utf-8'),
    url: async (text) => (await axios.get(text)).data,
  })) as string
}
