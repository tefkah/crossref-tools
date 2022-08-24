import { Element } from 'xast'
import { x } from 'xastscript'
import { Noisbn } from '../types'

export const noisbn = (): Noisbn => x('noisbn', { reason: 'simple_series' }, []) as Noisbn
