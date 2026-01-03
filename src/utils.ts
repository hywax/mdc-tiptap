/**
 * Check if a value is empty
 */
export function isEmpty(obj: Array<unknown> | Array<Record<string, unknown>> | Record<string, unknown> | string | boolean | number | undefined): boolean {
  if (obj === undefined || obj === null || obj === '' || obj === false) {
    return true
  }

  if (Array.isArray(obj)) {
    return obj.length === 0 || obj.every((item) => isEmpty(item as Record<string, unknown>))
  }

  return Object.keys(obj as Record<string, unknown>).length === 0 || Object.values(obj as Record<string, unknown>).every((value) => value === null || value === undefined)
}

/**
 * Check if a value is valid, not null or undefined
 */
export function isValidAttr(value?: string | null) {
  if (!value) {
    return false
  }
  const trimmed = String(value).trim()
  if (!trimmed) {
    return false
  }
  const lower = trimmed.toLowerCase()
  return lower !== 'null' && lower !== 'undefined'
}

/**
 * Clean span props, removing null and undefined values
 */
export function cleanSpanProps(attrs?: Record<string, unknown> | null) {
  const props: Record<string, string> = {}
  if (isValidAttr(attrs?.style as string)) {
    props.style = String(attrs!.style).trim()
  }
  if (isValidAttr((attrs as Record<string, unknown>)?.class as string)) {
    props.class = String((attrs as Record<string, unknown>).class).trim()
  }
  return props
}

/**
 * Process and normalize element props, converting className to class
 */
export function normalizeProps(nodeProps: Record<string, unknown>, extraProps: object): Array<[string, string]> {
  return Object.entries({ ...nodeProps, ...extraProps })
    .map(([key, value]) => {
      if (key === 'className') {
        return ['class', typeof value === 'string' ? value : (value as Array<string>).join(' ')] as [string, string]
      }
      return [key.trim(), String(value).trim()] as [string, string]
    })
    .filter(([key]) => Boolean(String(key).trim()))
}
