- create posts page that will contain 5 individual profiles
- create routes to navigate to the profile
- -create a dynamic path for the post
- ```jsx
{
  path:'posts/:postId',
  element: <PostPage />
}
``

- Posts page
- Post page

### useParams
```jsx
    import { useParams } from "react-router-dom"
    use it in the post components
    const params = useParams()
    console.log(params)
```

- Create a child root for the post
- Use Outlet to render the children of posts
- Use NavLink to show active path by replacing the Link with NavLink
- use css module to style the active
  ```jsx
      className={({isActive}) =>{
        return isActive? 'red': ""
      }}
  ```