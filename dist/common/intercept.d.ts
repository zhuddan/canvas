import type { Dirty } from '../types';
export declare function interceptDirty(): (target: Dirty, propertyKey: string, descriptor: PropertyDescriptor) => void;
