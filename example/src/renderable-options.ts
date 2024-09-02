import type { RenderableOptions } from '@zd~/canvas'
import type { Pane } from 'tweakpane'

/**
 * Create default display options
 */
export function createDefaultRenderableOptions() {
  const options: RenderableOptions = {
    rotation: 0,
    alpha: 1,
    shadow: {
      color: 'rgba(0, 0, 0, 0.5)',
      x: 5,
      y: 5,
      blur: 0,
    },
    skew: {
      x: 0,
      y: 0,
    },
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

  }
  return options
}

export function addRenderableOptionsBinding(pane: Pane, options: RenderableOptions) {
  const folder = pane.addFolder({
    title: 'renderableOptions',
  })
  if (options.position) {
    folder.addBinding(options, 'position', {
      x: {
        min: 0,
        max: window.screen.width,
      },
      y: {
        min: 0,
        max: window.screen.height,
      },
    })
  }
  folder.addBinding(options, 'rotation', {
    min: -Math.PI * 2,
    max: Math.PI * 2,
  })
  folder.addBinding(options, 'scale', {
    x: { min: -2, max: 2 },
    y: { min: -2, max: 2 },
  })
  folder.addBinding(options, 'anchor', {
    x: { min: 0, max: 1 },
    y: { min: 0, max: 1 },
  })
  folder.addBinding(options, 'pivot', {
    x: { min: -100, max: 100 },
    y: { min: -100, max: 100 },
  })
  folder.addBinding(options, 'skew', {
    x: { min: -1, max: 1 },
    y: { min: -1, max: 1 },
  })
  folder.addBinding(options, 'alpha', {
    min: 0,
    max: 1,
  })
  if (options.shadow?.color) {
    folder.addBinding(options, 'shadow', {
      x: { min: -100, max: 100 },
      y: { min: -100, max: 100 },
      label: 'shadow',
    })
    folder.addBinding(options.shadow, 'color', {
      label: 'shadow.color',
    })
    folder.addBinding(options.shadow, 'blur', {
      min: 0,
      max: 100,
    })
  }
}
