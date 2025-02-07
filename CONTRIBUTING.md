# nodejs-loaders.github.io Contributing Guide

Thank you for considering contributing to Node.js Loaders website! Contributions welcome, be they bug reports, feature requests, pull requests, or just questions.

## Getting started

Commands specifically relevant to this project are:

Run the frontend unit tests:

```bash
node --run test:unit
```

Lint, format, and check types can be handled by:

```bash
node --run pre-commit
```

## Writing Content (Posts)

To contribute a new post, create a new `.mdx` file in the `content/post/` directory. The file should include the following frontmatter:

- `title`: The title of the post (string).
- `description`: A brief description of the post (string).
- `authors`: An array of author names (string).
- `date`: The date of the post in `YYYY-MM-DD` format (string).
- `category`: The category of the post (string).

Here's an example:

```mdx
---
title: Your Post Title
description: A brief description of your post.
authors: YourName
date: 2025-02-07
category: example
---
```

Your post content goes here. You can use Markdown and JSX.

## Pull Requests

Changes should be atomic; do not combine multiple, discrete changes within a single PR.

We use [squash merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-commits) to create a single fresh commit based on PR title. The PR title should follow [Conventional Commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/). Acceptable "types" are:

Before a pull request is merged, the following requirements should be met:

- The pull request has a descriptive title and follows the commit message guidelines.
- An approval is valid if there have been no major changes since it was granted.
- 24 hours after approval and no objections, the pull request can be merged.
- All tests pass (Github actions).

## [Developer's Certificate of Origin 1.1](https://developercertificate.org)

```txt
By contributing to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the right to
  submit it under the open source license indicated in the file; or
- (b) The contribution is based upon previous work that, to the best of my knowledge,
  is covered under an appropriate open source license and I have the right under that
  license to submit that work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am permitted to submit under a
  different license), as indicated in the file; or
- (c) The contribution was provided directly to me by some other person who certified
  (a), (b) or (c) and I have not modified it.
- (d) I understand and agree that this project and the contribution are public and that
  a record of the contribution (including all personal information I submit with it,
  including my sign-off) is maintained indefinitely and may be redistributed consistent
  with this project or the open source license(s) involved.
```
