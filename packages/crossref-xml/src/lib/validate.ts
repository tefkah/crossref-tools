import { DoiBatchSchema } from '../validators/crossref'

export const validate = (doiBatch: any): void => {
  return DoiBatchSchema.parse(doiBatch)
}
