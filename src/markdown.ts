import type { JSONContent } from '@tiptap/vue-3'
import type { MDCToTiptapOptions } from './mdcToTiptap'
import type { TiptapToMDCMapOptions } from './tiptapToMdc'
import { parseMarkdown, stringifyMarkdown } from '@nuxtjs/mdc/runtime'
import { createMDCToTiptap } from './mdcToTiptap'
import { createTiptapToMDC } from './tiptapToMdc'

export interface MarkdownOptions {
  mdcToTiptap?: MDCToTiptapOptions
  tiptapToMDC?: TiptapToMDCMapOptions
}

export function createMarkdown(options?: MarkdownOptions) {
  const mdcToTiptap = createMDCToTiptap(options?.mdcToTiptap)
  const tiptapToMDC = createTiptapToMDC(options?.tiptapToMDC)

  async function tiptapToMarkdown(node: JSONContent): Promise<string | null> {
    const mdc = await tiptapToMDC.tiptapToMdc(node)
    return stringifyMarkdown(mdc.body, mdc.data)
  }

  async function markdownToTiptap(markdown: string): Promise<JSONContent> {
    const mdc = await parseMarkdown(markdown)
    return mdcToTiptap.mdcToTiptap(mdc.body)
  }

  return {
    tiptapToMarkdown,
    markdownToTiptap,
  }
}
