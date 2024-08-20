/**
 *
 * @param {number} min
 * @param {number} max
 */
export const range = (min, max) => ({ min, max })
export const color = () => ({ color: {} })
export function options(/** @type {any[]} */...args) {
  const options = /** @type {Record<string,any>} */ ({})
  for (let index = 0; index < args.length; index++) {
    const key = args[index]
    options[`${key}`] = key
  }
  return {
    options,
  }
}

/**
 *
 * @param {import('tweakpane').Pane} pane
 * @param {import('../../dist/index').Text} text
 * @param {import('../../dist/index').App} app
 */
export function createBaseFolder(pane, text, app) {
  const folderDisplay = pane.addFolder({
    title: 'base',
  })
  folderDisplay.addBinding(text, 'visible')
  folderDisplay.addBinding(text, 'x', range(0, app.width))
  folderDisplay.addBinding(text, 'y', range(0, app.height))
  folderDisplay.addBinding(text, 'position', {
    x: range(0, app.width),
    y: range(0, app.height),
  })
  folderDisplay.addBinding(text, 'rotation', range(-Math.PI * 2, Math.PI * 2))
  folderDisplay.addBinding(text, 'scale', range(-2, 2))
  folderDisplay.addBinding(text, 'anchor', range(0, 1))
  folderDisplay.addBinding(text, 'pivot', range(-100, 100))
  folderDisplay.addBinding(text, 'skew', range(-2, 2))
  folderDisplay.addBinding(text, 'alpha', range(0, 1))
}

/**
 *
 * @param {import('tweakpane').Pane} pane
 * @param {import('../../dist/index').Text} text
 * @param {import('../../dist/index').App} appx
 */
export function createBaseStyleFolder(pane, text) {
  const baseStyle = pane.addFolder({
    title: 'text.baseStyle',
  })
  baseStyle.addBinding(text.style, 'fill', color())
  baseStyle.addBinding(text.style, 'stroke', color())
  baseStyle.addBinding(text.style, 'shadow')
  baseStyle.addBinding(text.style.shadow, 'color', { label: 'shadow.fill' })
  baseStyle.addBinding(text.style.shadow, 'blur', { label: 'shadow.blur' })
  baseStyle.addBinding(text.style, 'shadow', { label: 'shadow' })
  baseStyle.addBinding(text.style, 'filter', {
    options: {
      'none': 'none',
      'blur(10px)': 'blur(10px)',
      'Multiple': 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)',
    },
  })
}
