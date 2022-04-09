import fs from 'fs';

import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import Content from '@/layout/Content';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = (props: any) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="OUI OUI OUI"
        />
      }
    >
      <Content>
        <MDXRemote {...props.mdxSource} />
      </Content>
    </Main>
  );
};

export default Index;

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');
  const article = fs.readFileSync(`posts/${files[0]}`, 'utf-8');

  const { data: frontMatter, content } = matter(article);
  const mdxSource = await serialize(content);

  // console.log(articles);
  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
};
