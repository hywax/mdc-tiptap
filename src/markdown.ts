import type { JSONContent } from '@tiptap/vue-3'
import { parseMarkdown, stringifyMarkdown } from '@nuxtjs/mdc/runtime'
import { mdcToTiptap } from './mdcToTiptap'
import { tiptapToMdc } from './tiptapToMdc'

export async function tiptapToMarkdown(node: JSONContent): Promise<string | null> {
  const mdc = await tiptapToMdc(node)

  return stringifyMarkdown(mdc.body, mdc.data)
}

export async function markdownToTiptap(markdown: string): Promise<JSONContent> {
  const mdc = await parseMarkdown(markdown)

  return mdcToTiptap(mdc.body, {})
}
