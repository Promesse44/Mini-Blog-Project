import Post from '../Post/Post'
import type { Post as PostType } from '../../types/post'

const posts: PostType[] = [
  {
    title: 'Understanding React Components',
    author: 'Amina',
    content: 'React components help you split the UI into reusable parts that are easier to reason about and test.',
    date: '2026-09-18',
  },
  {
    title: 'TypeScript in Everyday Frontend Work',
    author: 'Brian',
    content: 'TypeScript adds type safety to JavaScript and can help catch bugs early when working with component props.',
    date: '2026-09-17',
  },
  {
    title: 'Why Small Components Matter',
    author: 'Amina',
    content: 'Keeping components small usually improves maintainability and makes future UI changes easier to manage.',
    date: '2026-09-16',
  },
]

function PostList() {
  return (
    <section>
      {posts.map((post) => (
        <Post key={`${post.title}-${post.date}`} post={post} />
      ))}
    </section>
  )
}

export default PostList
