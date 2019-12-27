import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Item } from 'types'

export default () => {
  const { posts }: { posts: Item[] } = useRouteData()

  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts.map(post => (
          <li key={post.attributes.path}>
            <Link to={`/blog/post${post.attributes.path}/`}>{post.attributes.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
