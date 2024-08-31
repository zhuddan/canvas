/**
 * 获取一个对象中所有函数的key
 */
export type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
/**
 * 修改函数返回值
 */
export type ModifyReturnType<T, R> = {
    [K in keyof T]: T[K] extends (...args: infer A) => any ? (...args: A) => R : T[K];
};
export type AnyFunction = (...args: any[]) => any;
