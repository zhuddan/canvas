// @ts-check

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
 * @param {import('../../dist/index').Display} display
 * @param {import('../../dist/index').App} app
 */
export function createBaseFolder(pane, display, app) {
  const folderDisplay = pane.addFolder({
    title: 'base',
  })
  folderDisplay.addBinding(display, 'visible')
  folderDisplay.addBinding(display, 'x', range(0, app.width))
  folderDisplay.addBinding(display, 'y', range(0, app.height))
  folderDisplay.addBinding(display, 'position', {
    x: range(0, app.width),
    y: range(0, app.height),
  })
  folderDisplay.addBinding(display, 'rotation', range(-Math.PI * 2, Math.PI * 2))
  folderDisplay.addBinding(display, 'scale', range(-2, 2))
  folderDisplay.addBinding(display, 'anchor', range(0, 1))
  folderDisplay.addBinding(display, 'pivot', range(-100, 100))
  folderDisplay.addBinding(display, 'skew', range(-2, 2))
  folderDisplay.addBinding(display, 'alpha', range(0, 1))

  if (display.shadow?.color) {
    folderDisplay.addBinding(display, 'shadow', { label: 'shadow' })
    folderDisplay.addBinding(display.shadow, 'color', { label: 'shadow.fill' })
    folderDisplay.addBinding(display.shadow, 'blur', { label: 'shadow.blur' })
  }
}

/**
 *
 * @param {import('tweakpane').Pane} pane
 * @param {import('../../dist/index').Text} text
 */
export function createBaseStyleFolder(pane, text) {
  const baseStyle = pane.addFolder({
    title: 'text.baseStyle',
  })
  baseStyle.addBinding(text.style, 'fill', color())
  baseStyle.addBinding(text.style.stroke, 'color', color())
  baseStyle.addBinding(text.style.stroke, 'width', range(0, 10))

  baseStyle.addBinding(text.style, 'filter', {
    options: {
      'none': 'none',
      'blur(10px)': 'blur(10px)',
      'Multiple': 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)',
    },
  })
}
