import { toXml } from 'xast-util-to-xml'
import { generateCrossRefObject } from './generateCrossRefObject'

type CrossRefArgs = Parameters<typeof generateCrossRefObject>[0]

export const generateCrossRefXml = (args: CrossRefArgs) => {
  const crossRefObject = generateCrossRefObject(args)
  const xml = toXml(crossRefObject)
  return xml
}
