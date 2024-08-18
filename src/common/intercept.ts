export function interceptDirty() {
  return function (prototype: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set

    const originalGet = descriptor.get

    descriptor.set = function (newValue) {
      if (originalSet) {
        const oldValue = originalGet?.call(this)
        if (newValue !== oldValue) {
          originalSet.call(this, newValue);
          (this as any).dirty = true
        }
        else {
          // console.warn([newValue, oldValue], '新旧值相同')
        }
      }
    }
    Object.defineProperty(prototype, propertyKey, descriptor)
  }
}
