# Blog Content Directory

This directory contains all blog posts written in Markdown format.

## How to Add a New Blog Post

1. Create a new `.md` file in `src/content/blogs/` directory
2. Use a URL-friendly filename (e.g., `my-awesome-post.md`)
3. Add frontmatter at the top of the file
4. Write your content using Markdown syntax

### Example Blog Post

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your blog post for SEO and previews"
date: 2024-12-15
tags: ["DevOps", "Kubernetes", "CI/CD"]
author: "Shubham Salunke"
draft: false
---

# Your Blog Post Title

Your introduction paragraph goes here...

## Section 1

Content for section 1...

### Subsection

More detailed content...

\`\`\`yaml
# Code example
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
\`\`\`

## Conclusion

Wrap up your thoughts here...
```

## Frontmatter Fields

- **title** (required): The title of your blog post
- **description** (required): A short description (used for SEO and previews)
- **date** (required): Publication date in YYYY-MM-DD format
- **tags** (required): Array of tags for categorization
- **author** (optional): Author name (defaults to "Shubham Salunke")
- **image** (optional): Cover image path (e.g., "/images/blog/my-post.jpg")
- **draft** (optional): Set to `true` to hide the post (defaults to `false`)

## Markdown Features Supported

- **Headers**: Use `#`, `##`, `###` etc.
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[link text](https://example.com)`
- **Images**: `![alt text](/path/to/image.jpg)`
- **Code blocks**: Use triple backticks with language
- **Inline code**: Use single backticks
- **Lists**: Use `-` or `1.` for lists
- **Blockquotes**: Use `>`
- **Tables**: Markdown tables are supported

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Keep it short and descriptive
- Examples:
  - `kubernetes-deployment-guide.md`
  - `terraform-best-practices.md`
  - `docker-security-tips.md`

## After Adding a Post

1. The post will automatically appear on your homepage (latest 6 posts)
2. It will be listed on the `/blog` page
3. Each post gets its own page at `/blog/[filename]`
4. No build step required - Astro handles everything!

## Existing Blog Posts

- `kubernetes-zero-downtime.md` - Implementing Zero-Downtime Deployments with Kubernetes
- `terraform-best-practices.md` - Infrastructure as Code: Terraform Best Practices

Add more posts following the same structure!
