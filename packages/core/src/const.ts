/**
 * 无操作
 */
export function NOOP() {}
/**
 * 环境变量
 */
export enum ENV {
  /**
   * web 环境
   */
  WEB = 'WEB',
  /**
   * 微信小程序
   */
  WX = 'WX',
  /**
   *  uni-app
   */
  UNI_APP = 'UNI_APP',
  /**
   * 未知
   */
  UNKNOWN = 'UNKNOWN',
}

/**
 * 当前环境
 */
export const RUNTIME_ENVIRONMENT = typeof uni !== 'undefined'
  ? ENV.UNI_APP
  : typeof wx !== 'undefined'
    ? ENV.WX
    : typeof window !== 'undefined' && typeof window.document !== 'undefined'
      ? ENV.WEB
      : ENV.UNKNOWN
/**
 * WEB 环境下
 */
export const IS_WEB = RUNTIME_ENVIRONMENT === ENV.WEB

/**
 * 微信小程序
 */
export const IS_WX = RUNTIME_ENVIRONMENT === ENV.WX
/**
 * UNIAPP
 */
export const IS_UNI_APP = RUNTIME_ENVIRONMENT === ENV.UNI_APP

/**
 * 微信小程序/UNIAPP环境下
 */
export const IS_WX_UNIAPP = IS_WX || IS_UNI_APP

/**
 * 标准dom环境
 */
export const IS_STANDARD_DOM_ENVIRONMENT
    = typeof window !== 'undefined'
    && typeof document !== 'undefined'
    && typeof navigator !== 'undefined'
    && 'addEventListener' in window
    && 'querySelectorAll' in document
    && 'userAgent' in navigator
