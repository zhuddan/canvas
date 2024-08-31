import type { RenderableOptions } from '@zd~/canvas'
import type { Pane } from 'tweakpane'

/**
 * Create default display options
 */
export function createDefaultRenderableOptions() {
  const options: RenderableOptions = {
    rotation: 0,
    scale: {
      x: 1,
      y: 1,
    },
    anchor: {
      x: 0,
      y: 0,
    },
    pivot: {
      x: 0,
      y: 0,
    },
    skew: {
      x: 0,
      y: 0,
    },
    alpha: 1,
    shadow: {
      color: 'rgba(0, 0, 0, 0.5)',
      x: 5,
      y: 5,
      blur: 0,
    },
  }
  return options
}

export function addRenderableOptionsBinding(pane: Pane, options: RenderableOptions) {
  const displayFolder = pane.addFolder({
    title: 'displayOptions',
  })
  displayFolder.addBinding(options, 'rotation', {
    min: -Math.PI * 2,
    max: Math.PI * 2,
  })
  displayFolder.addBinding(options, 'scale', {
    x: { min: -2, max: 2 },
    y: { min: -2, max: 2 },
  })
  displayFolder.addBinding(options, 'anchor', {
    x: { min: 0, max: 1 },
    y: { min: 0, max: 1 },
  })
  displayFolder.addBinding(options, 'pivot', {
    x: { min: -100, max: 100 },
    y: { min: -100, max: 100 },
  })
  displayFolder.addBinding(options, 'skew', {
    x: { min: -1, max: 1 },
    y: { min: -1, max: 1 },
  })
  displayFolder.addBinding(options, 'alpha', {
    min: 0,
    max: 1,
  })
  if (options.shadow?.color) {
    displayFolder.addBinding(options, 'shadow', {
      x: { min: -100, max: 100 },
      y: { min: -100, max: 100 },
      label: 'shadow',
    })
    displayFolder.addBinding(options.shadow, 'color', {
      label: 'shadow.color',
    })
    displayFolder.addBinding(options.shadow, 'blur', {
      min: 0,
      max: 100,
    })
  }
}
