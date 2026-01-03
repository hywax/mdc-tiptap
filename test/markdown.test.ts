import { describe, expect, it } from 'vitest'
import { markdownToTiptap, tiptapToMarkdown } from '../src'

async function processMarkdown(input: string) {
  const doc = await markdownToTiptap(input)
  const output = await tiptapToMarkdown(doc)

  expect(output).toBe(input)
}

describe('markdown', () => {
  it('should convert paragraph to doc and back', async () => {
    const input = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor nisi nec eleifend egestas. Vivamus sagittis orci in eros volutpat consequat.

Nam gravida nunc sed aliquam porttitor. Cras pharetra volutpat elit, ac rutrum velit pellentesque vitae. Quisque in gravida orci, quis feugiat dolor.
`.trimStart()

    await processMarkdown(input)
  })

  it('should convert headings to doc and back', async () => {
    const input = `
# Heading h1

## Heading h2

### Heading h3

#### Heading h4
`.trimStart()

    await processMarkdown(input)
  })

  it('should convert formatting to doc and back', async () => {
    const input = `
**Bold**

*Italic*

~~Strikethrough~~

\`code\`

[External Link](https://google.com){rel="nofollow"}

[Internal Link](/local)

[Internal Link New Window](/local){target="_blank"}
`.trimStart()

    await processMarkdown(input)
  })

  it('should convert lists to doc and back', async () => {
    const input = `
- List item
- List item

1. Ordered list item
2. Ordered list item
`.trimStart()

    await processMarkdown(input)
  })

  it('should convert complex blocks to doc and back', async () => {
    const input = `
> Blockquote

\`\`\`text
This is a code block
\`\`\`
`.trimStart()

    await processMarkdown(input)
  })

  it('should convert tables to doc and back', async () => {
    const input = `
| Syntax | Description |
| ------ | ----------- |
| Header | Title       |
`.trimStart()

    await processMarkdown(input)
  })

  it('should convert mdc to doc and back', async () => {
    const input = `
::note
test
::

:custom-component{alt="alt text" image="link to image" lqip="data:image/jpeg;base64,/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAEQES/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AMXyIZEbgUi4FoG1P//Z"}
`.trimStart()

    await processMarkdown(input)
  })
})
