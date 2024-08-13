# Difference between two code snippets

```
app.get("/", (req, res) => {
  return res.status(201).json({ message: "OK" });
});
```
```
app.get("/", (req, res) => {
  res.status(201).json({ message: "OK" });
});
```

*The two code snippets you provided are almost identical, but there are a few subtle differences:*

1. **Return statement:**
   - In the first snippet, the `return` keyword is used before `res.status(201).json({ message: "OK" })`.
   - In the second snippet, the `return` keyword is omitted.

2. **Implicit return:**
   - In the second snippet, the `res.status(201).json({ message: "OK" })` statement is the last line in the function, so it is implicitly returned.
   - In the first snippet, the `return` keyword is used to explicitly return the response.

Both of these approaches are valid and will produce the same result, but there are some differences in their usage:

**Explicit return:**
- Using the `return` keyword makes it clear that the function is returning a value.
- This can be useful for readability and maintainability, especially in larger codebases or when the function has multiple return paths.

**Implicit return:**
- When the response is the last statement in the function, the `return` keyword can be omitted, making the code more concise.
- This is a common pattern in arrow functions and shorter, single-expression functions.

In general, both approaches are acceptable, and the choice often comes down to personal preference and coding style. The important thing is to be consistent within your codebase and follow the conventions of the team or project you're working on.