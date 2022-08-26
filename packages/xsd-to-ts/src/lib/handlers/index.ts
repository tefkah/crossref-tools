import { all } from '../all'
import { element } from './element'
import { complexType } from './complexType'
import { simpleType } from './simpleType'

export const handlers = {
  root: all,
  element: element,
  complexType,
  simpleType,
}
