import { shouldUpdate } from '../app'

export function interceptUpdate() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set

    const originalGet = descriptor.get

    descriptor.set = function (newValue) {
      if (originalSet) {
        const oldValue = originalGet?.call(this)
        if (newValue !== oldValue) {
          originalSet.call(this, newValue)
          shouldUpdate()
        }
        else {
          // console.warn([newValue, oldValue], '新旧值相同')
        }
      }
    }

    Object.defineProperty(target, propertyKey, descriptor)
  }
}
