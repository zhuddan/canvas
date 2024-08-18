import type { Dirty } from '../types'

export function interceptDirty() {
  return function (target: Dirty, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set

    const originalGet = descriptor.get

    descriptor.set = function (newValue) {
      if (originalSet) {
        const oldValue = originalGet?.call(this)
        if (newValue !== oldValue) {
          originalSet.call(this, newValue)
          target.dirty = true
          // console.log('this', this)
          // console.log(this.display)
          // console.log('target', target)
          // console.log(target.display)
          if ((this as Dirty).display) {
            (this as Dirty).display!.dirty = true
          }
        }
        else {
          // console.warn([newValue, oldValue], '新旧值相同')
        }
      }
    }

    Object.defineProperty(target, propertyKey, descriptor)
  }
}
