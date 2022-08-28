import { CitationList, Citation, Author, JournalTitle, ArticleTitle, Doi } from '../types'

export interface Cite {
  publishedWhere: string
  authors: [{ name: string }] | { name: string }[]
  title: string
  prefix: string
  suffix: string
  publishedAt: string | Date
}

export const citationList = ({ citations }: { citations: Cite[] }): CitationList => {
  const js: CitationList = {
    type: 'element',
    name: 'citation_list',
    children: citations.map((citation, index) => {
      const { publishedWhere, authors, title, prefix, suffix, publishedAt } = citation

      const datetime = typeof publishedAt === 'string' ? new Date(publishedAt) : publishedAt
      const citationJs: Citation = {
        type: 'element',
        name: 'citation',
        attributes: {
          // index starts at 0
          key: `${index + 1}`,
        },
        children: [
          {
            type: 'element',
            name: 'journal_title',
            children: [
              {
                type: 'text',
                value: publishedWhere,
              },
            ],
          } as JournalTitle,
          {
            type: 'element',
            name: 'author',
            children: [
              {
                type: 'text',
                value: authors[0].name,
              },
            ],
          } as Author,
          {
            type: 'element',
            name: 'cYear',
            children: [
              {
                type: 'text',
                value: datetime.getUTCFullYear().toString(),
              },
            ],
          },
          {
            type: 'element',
            name: 'doi',
            children: [
              {
                type: 'text',
                value: `${prefix}/${suffix}`,
              },
            ],
          } as Doi,
          // {
          //   type: "element",
          //   name: "isbn",
          //   children: [
          //     {
          //       type: "text",
          //       value: isbn,
          //     },
          //   ],
          // },
          {
            type: 'element',
            name: 'article_title',
            children: [
              {
                type: 'text',
                value: title,
              },
            ],
          } as ArticleTitle,
        ],
      }
      return citationJs
    }),
  }

  return js
}
