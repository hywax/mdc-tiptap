# MDC to Tiptap

[![Version](https://img.shields.io/npm/v/@hywax/mdc-tiptap.svg?label=version)](https://www.npmjs.com/package/@hywax/mdc-tiptap)
[![Downloads](https://img.shields.io/npm/dm/@hywax/mdc-tiptap.svg)](https://npmcharts.com/compare/hywax?minimal=true)
[![License](https://img.shields.io/npm/l/@hywax/mdc-tiptap.svg)](https://www.npmjs.com/package/@hywax/mdc-tiptap)

> [!IMPORTANT]
> This is a temporary library for converting MDC to Tiptap, it will become obsolete after [nuxt-content/studio#221](https://github.com/nuxt-content/studio/issues/221).
> If you find a bug, please create an issue inside [nuxt-content/studio](https://github.com/nuxt-content/studio/issues) as this is just a copy of files from studio.

## Installation

```bash
# Using pnpm
pnpm add @hywax/mdc-tiptap -D

# Using yarn
yarn add @hywax/mdc-tiptap -D

# Using npm
npm install @hywax/mdc-tiptap -D
```

## Usage

### `mdcToTiptap`

```ts
import { mdcToTiptap } from '@hywax/mdc-tiptap'

const mdc = await parseMarkdown(markdown) // AST MDC
```

### `mdcNodeToTiptap`

```ts
import { mdcNodeToTiptap } from '@hywax/mdc-tiptap'

const tiptap = mdcNodeToTiptap(mdc) // AST Tiptap
```
### `tiptapToMarkdown`

```ts
import { tiptapToMarkdown } from '@hywax/mdc-tiptap'

const markdown = await tiptapToMarkdown(tiptap) // Markdown string
```

```ts
import { markdownToTiptap } from '@hywax/mdc-tiptap'

const tiptap = await markdownToTiptap(markdown) // AST Tiptap
```

### `markdownToTiptap`

## License

MDC to Tiptap is open sourced software licensed under the [MIT license](https://github.com/hywax/mdc-tiptap/blob/main/LICENSE.md).
