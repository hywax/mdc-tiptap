import type { JSONContent } from '@tiptap/vue-3'
import type { MDCToTipTapMap } from './mdcToTiptap'
import type { TiptapToMDCMap } from './tiptapToMdc'
import type { SyntaxHighlightTheme } from './types'
import { parseMarkdown, stringifyMarkdown } from '@nuxtjs/mdc/runtime'
import { mdcToTiptap } from './mdcToTiptap'
import { tiptapToMdc } from './tiptapToMdc'

interface MarkdownToTiptapOptions {
  tiptapToMDCMap?: TiptapToMDCMap
  highlightTheme?: SyntaxHighlightTheme
}

interface TiptapToMarkdownOptions {
  mdcToTiptapMap?: MDCToTipTapMap
}

export async function tiptapToMarkdown(node: JSONContent, options?: MarkdownToTiptapOptions): Promise<string | null> {
  const mdc = await tiptapToMdc(node, options)

  return stringifyMarkdown(mdc.body, mdc.data)
}

export async function markdownToTiptap(markdown: string, options?: TiptapToMarkdownOptions): Promise<JSONContent> {
  const mdc = await parseMarkdown(markdown)

  return mdcToTiptap(mdc.body, options)
}
