Writing good, meaningful, and standard Git commit messages is crucial for making your project history clear, understandable, and easy to navigate. A well-structured commit message provides context to collaborators (and your future self) about why certain changes were made. Here's a guide on how to write effective commit messages:

### **Best Practices for Writing Git Commit Messages**

#### 1. **Use a Consistent Structure**
A typical Git commit message consists of three parts:
- **Header (title)**: A concise summary of the change (max 50 characters).
- **Body (optional)**: Detailed explanation of **what** and **why** the change was made (usually up to 72 characters per line).
- **Footer (optional)**: Additional information like references to issues, breaking changes, or deprecations.

```bash
type(scope): short description

Detailed explanation of the change, if needed.
Include the motivation behind the change and any key details.
Use bullet points or separate paragraphs for clarity.

Footer: Reference issues (e.g., Closes #123), breaking changes, etc.
```

#### 2. **Follow a Conventional Commit Format**
The **Conventional Commits** specification is a widely accepted format for writing commit messages. It structures commits with a **type** and **scope** to make them more understandable. Here's how:

**Format**: 
```
<type>(<scope>): <short description>
```

- **type**: The type of change. Common types include:
  - **feat**: A new feature.
  - **fix**: A bug fix.
  - **chore**: Minor changes like code formatting, comments, or dependency updates.
  - **docs**: Documentation updates.
  - **style**: Code style changes (formatting, missing semi-colons, etc.).
  - **refactor**: Code changes that neither fix a bug nor add a feature.
  - **test**: Adding or updating tests.
  - **perf**: Performance improvements.
  - **build**: Changes related to the build system (e.g., Webpack, npm scripts).
  - **ci**: Continuous integration updates.

- **scope**: The part of the codebase affected, e.g., `auth`, `api`, `ui`. It is optional but helps to indicate what area of the code was touched.

**Examples**:
- `feat(api): add new login endpoint`
- `fix(ui): correct button color on hover`
- `chore(deps): bump lodash to 4.17.21`

#### 3. **Write a Meaningful Title (Header)**
- Keep the title short and clear, typically around 50 characters.
- Use the **imperative mood** in the message (e.g., "fix bug," "add feature") as if you're giving an instruction: "What should this commit do?"
  - **Correct**: "fix API response handling"
  - **Incorrect**: "fixed the API response handling" or "fixes API response handling"
- Don't end the title with a period.

**Examples**:
- `fix(auth): prevent unauthorized users from accessing protected routes`
- `chore(deps): update React version to 18`

#### 4. **Provide a Detailed Body (Optional)**
The body explains **why** the change was necessary, **what** was changed, and any additional details. This section is optional but important for larger commits.
- Wrap the lines at 72 characters to improve readability.
- Use bullet points or paragraphs to break down details.
- Explain the **reason** behind the change or potential side effects.

**Example**:
```
fix(api): handle edge case in API response

Previously, the API failed when receiving null values in the user profile data.
This fix ensures that null values are properly checked and defaults are applied.
Additional logging is added for better debugging of failed requests.
```

#### 5. **Use the Footer (Optional)**
- The footer is used for closing issues, mentioning breaking changes, or adding extra context.
- Reference issues and pull requests:
  - `Closes #123` (automatically closes the issue when the commit is merged).
- Document **breaking changes**:
  - `BREAKING CHANGE: removes support for old API endpoint /v1/user`.

**Example**:
```
feat(auth): add OAuth2 support

This adds OAuth2 authentication flow for Google and Facebook login. The feature
includes a token refresh mechanism and additional error handling.

Closes #456
BREAKING CHANGE: Users must now log in through OAuth2, and the legacy login form is removed.
```

#### 6. **Keep Commit Messages Focused**
- Make each commit small and atomic, focusing on a single issue or feature. 
- Avoid mixing unrelated changes in the same commit. This makes debugging and history tracking more manageable.

### **Example Commit Messages**

1. **Feature Addition**:
   ```
   feat(search): implement fuzzy search

   Added a fuzzy search algorithm to improve search result accuracy when users
   provide approximate or partial input. This change enhances user experience 
   by displaying closer matches for search queries.

   Closes #102
   ```

2. **Bug Fix**:
   ```
   fix(auth): prevent session timeout for active users

   A bug was causing sessions to expire for active users after a short period.
   This fix ensures that the session duration is extended while the user is
   actively interacting with the platform.
   
   Closes #210
   ```

3. **Chore/Dependency Update**:
   ```
   chore(deps): update axios to 0.21.1

   Updated axios to the latest version to fix vulnerabilities found in the 
   previous version. No breaking changes were introduced.
   ```

4. **Documentation Update**:
   ```
   docs(readme): update installation instructions

   Added missing steps for setting up the project on a fresh development machine.
   Updated the commands to reflect the new package manager being used.
   ```

### **Avoid Common Pitfalls**
- Avoid vague messages like "fix bug" or "update file." Be specific.
- Don’t use the commit message as a description of **how** you made the change (that's already in the code). Instead, focus on **why** the change was made.
- Use separate commits for different issues, even if they're small.

### Conclusion
By adhering to these practices, you create a more organized and professional commit history, making your project easier to maintain, review, and collaborate on. Proper commit messages are a critical part of maintaining a clean, understandable version history.