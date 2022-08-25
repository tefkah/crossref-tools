import { FreeToRead, LicenseRef, Program as AiProgram } from '../types'
export type URI = `http${'s' | ''}://${string}`
export const isURI = (uri: string): uri is URI => /https?:\/\.*/.test(uri)
export interface AiProgramProps {
  url: URI
}

export const aiProgram = ({ url }: AiProgramProps): AiProgram =>
  ({
    type: 'element',
    name: 'program',
    attributes: {
      name: 'AccessIndicators',
    },
    children: [
      {
        type: 'element',
        name: 'free_to_read',
        children: [],
      } as FreeToRead,
      {
        type: 'element',
        name: 'license_ref',
        attributes: {
          applies_to: 'vor',
        },
        children: [
          {
            type: 'text',
            value: url,
          },
        ],
      } as LicenseRef,
    ],
  } as AiProgram)
