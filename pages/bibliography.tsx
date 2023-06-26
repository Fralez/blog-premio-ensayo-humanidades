import { InferGetStaticPropsType } from 'next'
import { allDocuments } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { MDXComponents } from '@/components/MDXComponents'

const DEFAULT_LAYOUT = 'BibliographyLayout'

export const getStaticProps = async () => {
  const author = allDocuments.find((b) => b.slug === 'bibliography')
  return { props: { author } }
}

export default function Proposal({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXLayoutRenderer
      layout={author.layout || DEFAULT_LAYOUT}
      content={author}
      MDXComponents={MDXComponents}
    />
  )
}
