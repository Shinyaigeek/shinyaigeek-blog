import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Item } from 'types'

export default () => {
  const { items }: { items: Item[] } = useRouteData()

  return (
    <div>
      <h1>It's blog time.</h1>
      <br />
      All Posts:
      <ul>
        {items.map((post) => (
          <li key={post.attributes.path}>
            <Link to={`/post${post.attributes.path}/`}>{post.attributes.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
