import React from 'react'
import type { Post as PostType } from '../../types/post'
import './post.css'
import withLogger from '../../hoc/withLogger'

interface PostProps {
  post: PostType
}

function Post({ post }: PostProps) {
  const preview = `${post.content.split(' ').slice(0, 12).join(' ')}...`
  const postDate = new Date(post.date)
  const isNew = Date.now() - postDate.getTime() < 24 * 60 * 60 * 1000

  return (
    <article className="post">
      <h2>
        {post.title}
        {isNew && <span className="badge">New</span>}
      </h2>
      <p className="meta">By {post.author} — <time>{post.date}</time></p>
      <p className="preview">{preview}</p>
    </article>
  )
}

const Memoed = React.memo(Post)
export default withLogger(Memoed)
