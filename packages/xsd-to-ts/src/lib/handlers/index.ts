import { all } from '../all'
import { element } from './element'
import { complexType } from './complexType'
import { simpleType } from './simpleType'
import { attributeGroup } from './attributeGroup'
import { attribute } from './attribute'
import { group } from './group'
import { choice } from './choice'

export const handlers = {
  root: all,
  element: element,
  complexType,
  simpleType,
  attribute,
  attributeGroup,
  group,
  choice,
}
