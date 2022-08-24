import { u } from 'unist-builder'
import { Element, Text } from 'xast'
import { x } from 'xastscript'
import {
  Depositor,
  DepositorName,
  DoiBatchId,
  EmailAddress,
  Head,
  HeadChildren,
  Registrant,
  TextNode,
  Timestamp,
} from '../types'

type HeadProps = {
  /**
   *
   */
  registrant: Registrant
}
type SameThingRealy<T> = {
  [P in keyof T]: T[P] extends TextNode ? string : T[P]
}

type SameHead = SameThingRealy<HeadChildren>

const hh = ({ registrant }: SameHead) => registrant

export const head = ({ registrant, email }: { registrant: Registrant; email: string }): Head => {
  const datetime = Date.now()

  const head: Head = x('head', [
    x('doi_batch_id', [u('text', datetime.toString())]) as DoiBatchId,
    x('timestamp', [u('text', datetime.toString())]) as Timestamp,
    x('depositor', [
      // x('depositor_name', [u('text', registrant)]) as DepositorName,
      x('email_address', [u('text', email)]) as EmailAddress,
    ]) as Depositor,
    // x('registrant', [u('text', registrant)]) as Registrant,
    registrant,
  ]) as Head

  return head
}
