import type { DisplayOptions } from '@zd~/canvas'
import type { Pane } from 'tweakpane'

/**
 * Create default display options
 */
export function createDefaultDisplayOptions() {
  const displayOptions: DisplayOptions = {
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
  return displayOptions
}

export function addDisplayOptionsBinding(pane: Pane, displayOptions: DisplayOptions) {
  const displayFolder = pane.addFolder({
    title: 'displayOptions',
  })
  displayFolder.addBinding(displayOptions, 'rotation', {
    min: -Math.PI * 2,
    max: Math.PI * 2,
  })
  displayFolder.addBinding(displayOptions, 'scale', {
    x: { min: -2, max: 2 },
    y: { min: -2, max: 2 },
  })
  displayFolder.addBinding(displayOptions, 'anchor', {
    x: { min: 0, max: 1 },
    y: { min: 0, max: 1 },
  })
  displayFolder.addBinding(displayOptions, 'pivot', {
    x: { min: -100, max: 100 },
    y: { min: -100, max: 100 },
  })
  displayFolder.addBinding(displayOptions, 'skew', {
    x: { min: -1, max: 1 },
    y: { min: -1, max: 1 },
  })
  displayFolder.addBinding(displayOptions, 'alpha', {
    min: 0,
    max: 1,
  })
  if (displayOptions.shadow?.color) {
    displayFolder.addBinding(displayOptions, 'shadow', {
      x: { min: -100, max: 100 },
      y: { min: -100, max: 100 },
      label: 'shadow',
    })
    displayFolder.addBinding(displayOptions.shadow, 'color', {
      label: 'shadow.color',
    })
    displayFolder.addBinding(displayOptions.shadow, 'blur', {
      min: 0,
      max: 100,
    })
  }
}
