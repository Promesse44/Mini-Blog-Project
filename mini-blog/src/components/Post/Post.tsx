import type { Post as PostType } from '../../types/post'

interface PostProps {
  post: PostType
}

function Post({ post }: PostProps) {
  const preview = `${post.content.split(' ').slice(0, 12).join(' ')}...`

  return (
    <article>
      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      <p>{preview}</p>
      <p>{post.date}</p>
    </article>
  )
}

export default Post
