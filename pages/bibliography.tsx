// import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { MDXComponents } from '@/components/MDXComponents'

const DEFAULT_LAYOUT = 'BibliographyLayout'

export const getStaticProps = async () => {
  const author = allBlogs.find((b) => b.slug === 'bibliography')
  return { props: { author } }
}

export default function Proposal({ author }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(author)
  return (
    <MDXLayoutRenderer
      layout={author.layout || DEFAULT_LAYOUT}
      content={author}
      MDXComponents={MDXComponents}
    />
  )
}
