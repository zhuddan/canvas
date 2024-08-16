import type { UpdateEvent } from '../types'
import type { Event } from './event'

export function updateIntercept() {
  return function (target: UpdateEvent, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set

    const originalGet = descriptor.get

    descriptor.set = function (newValue) {
      if (originalSet) {
        const oldValue = originalGet?.call(this)
        if (newValue !== oldValue) {
          originalSet.call(this, newValue)
          // target.on('shouldUpdate', console.log)
          target.emit.call(this, 'shouldUpdate', propertyKey)
        }
        else {
          console.log([newValue, oldValue], '新旧值相同')
        }
      }
    }

    Object.defineProperty(target, propertyKey, descriptor)
  }
}
