# Question
## Why do we use `req.body.title` to assign a new title to `post.title`, instead of `req.params.title`?
``` nodejs
router.put(`:id`, (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ message: `Post with id ${id} not found.` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});
```


## Answer
The difference in how we access the `id` and `title` is due to how data is typically sent in HTTP requests:

1. `req.params.id`: This is used for data that's part of the URL path. In a route like `/posts/:id`, the `id` is a path parameter, so it's accessed via `req.params`.

2. `req.body.title`: This is used for data sent in the request body, typically with POST or PUT requests. The `title` is not part of the URL, but is sent in the request body, often in JSON format.

We use `req.body.title` because in a PUT request to update a post, the new title is typically sent in the request body, not as a URL parameter. This allows for sending more complex or larger amounts of data than what can be conveniently included in the URL.

If we used `req.params.title`, it would imply the title is part of the URL (like `/posts/:id/:title`), which is not a common or recommended practice for updates.