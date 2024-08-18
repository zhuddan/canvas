import { Display } from '../object/display.js';
import '../position/point.js';
import '../style/base-style.js';

declare function interceptUpdate(): (target: Display, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare function interceptUpdate2(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;

export { interceptUpdate, interceptUpdate2 };
