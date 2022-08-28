import { u } from 'unist-builder'
import { x } from 'xastscript'
import { Depositor, DoiBatchId, EmailAddress, Head, Registrant, Timestamp } from '../types'

type HeadProps = {
  registrant: Registrant['children'][0]['value']
  email: EmailAddress['children'][0]['value']
}

export const head = ({ registrant, email }: HeadProps): Head => {
  const datetime = Date.now()

  return x('head', [
    x('doi_batch_id', [u('text', datetime.toString())]) as DoiBatchId,
    x('timestamp', [u('text', datetime.toString())]) as Timestamp,
    x('depositor', [
      // x('depositor_name', [u('text', registrant)]) as DepositorName,
      x('email_address', [u('text', email)]) as EmailAddress,
    ]) as Depositor,
    // x('registrant', [u('text', registrant)]) as Registrant,
    registrant,
  ]) as Head
}
