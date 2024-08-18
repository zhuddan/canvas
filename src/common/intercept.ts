// import { shouldUpdate } from '../app'

import type { Display } from '../object/display'

export function interceptUpdate() {
  return function (target: Display, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set

    const originalGet = descriptor.get

    descriptor.set = function (newValue) {
      if (originalSet) {
        const oldValue = originalGet?.call(this)
        if (newValue !== oldValue) {
          originalSet.call(this, newValue)
          target.dirty = true
        }
        else {
          // console.warn([newValue, oldValue], '新旧值相同')
        }
      }
    }

    Object.defineProperty(target, propertyKey, descriptor)
  }
}

export function interceptUpdate2() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // const originalSet = descriptor.set

    // const originalGet = descriptor.get

    // descriptor.set = function (newValue) {
    //   if (originalSet) {
    //     const oldValue = originalGet?.call(this)
    //     if (newValue !== oldValue) {
    //       originalSet.call(this, newValue)
    //       target.dirty = true
    //     }
    //     else {
    //       // console.warn([newValue, oldValue], '新旧值相同')
    //     }
    //   }
    // }

    // Object.defineProperty(target, propertyKey, descriptor)
  }
}
