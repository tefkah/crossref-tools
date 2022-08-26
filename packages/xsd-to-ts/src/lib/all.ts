import { one } from './one'
import { X, Node, Parent, Handle, XastContent } from './types'

/**
 * Convert all nodes in tree using j
 * @param x ast constructor function
 * @param parent
 * @returns
 */

export function all(
  //<T extends JastContent = JastContent>
  j: X,
  parent: Parent,
): // Array<T extends JastParent ? T['children'][number] : JastContent>
any[] {
  // @ts-expect-error Assume `parent` is a parent.
  const nodes: Array<Node> = parent.children || []
  const values: Array<XastContent> = []
  let index = -1
  const length = nodes.length

  while (++index < length) {
    const result = one(j, nodes[index], parent)

    if (Array.isArray(result)) {
      values.push(...result)
    } else if (result) {
      values.push(result)
    }
  }

  return values
}
