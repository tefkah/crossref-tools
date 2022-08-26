import { fromXml } from 'xast-util-from-xml'
import { getText } from './getText'

export const getXast = async (xml: string) => {
  const text = await getText(xml)
  try {
    return fromXml(text)
  } catch (e) {
    throw new Error(`Could not parse xml: ${e}`)
  }
}
