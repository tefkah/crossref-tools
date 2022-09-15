import { all } from '../all'
import { Parent, Node, X, Element } from '../types'
import { createTypeName } from '../util/createTypeName'
import { getAnnotation } from '../util/get-annotation'
import { ts, printNode, createWrappedNode, JSDocTag } from 'ts-morph'
import { simpleType } from './simpleType'

export const element = (x: X, node: Element, parent?: Parent): any | Array<any> | void => {
  const annotation = getAnnotation(node)
  if (node.attributes?.ref) {
    x.refs = { ...(x.refs ?? {}), [node.attributes.ref]: 'element' }
    return createTypeName(node.attributes.ref) //{ type: 'ref', name: node.attributes.ref }
  }

  if (!node.attributes?.name) return {}

  if ((node?.children[1]?.name ?? node?.children?.[0]?.name) === 'simpleType') {
    return simpleType(x, node.children[1] as Element, node)
  }



  const typeProperty = ts.factory.createPropertySignature(
    undefined,
    'type',
    undefined,
    ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral('element')),
  )

  const nameProperty = ts.factory.createPropertySignature(
    undefined,
    'name',
    undefined,
    node.attributes?.name
      ? ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(node.attributes.name))
      : ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
  )

  
  const el = ts.factory.createInterfaceDeclaration(
    undefined,
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
    createTypeName(node.attributes.name),
    undefined,
    undefined,
    [typeProperty, nameProperty],
  )

  const interfaceNode = x.sourceFile.addInterface({
    name: createTypeName(node.attributes.name),
    isExported: true,
    docs: []
    , properties: [
      {name: 'type', type: 'element', },
      {name: 'name', type: node.attributes.name, },
    ]
  })



  // const elNode = createWrappedNode(el, {
  //   sourceFile: 
  // })
  const jsdocTags: JSDocTag[] = []

  if (annotation || jsdocTags.length) {
    interfaceNode.addJsDoc({
      ...(annotation ? { description: annotation } : {}),
    })
  }

  // return printNode(elNode.compilerNode)

}
