import { Properties } from 'csstype';

interface IColor {
    /**
     * 填充颜色
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle)
     */
    fill?: CanvasRenderingContext2D['fillStyle'];
    /**
     * 描边颜色 当仅仅指定stroke 而未指定 fill 时 只会绘制镂空文字
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
     */
    stroke?: CanvasRenderingContext2D['strokeStyle'];
    /**
     * 描边宽度? 默认为1
     */
    strokeWeight?: number;
}
/**
 * 锚点 默认 左上角为0(x=0,y=0) 右下角为(1,1)
 */
type Anchor = number | {
    x: number;
    y: number;
};
interface IAnchor {
    anchor?: Anchor;
}
/**
 * 旋转角度(默认旋转中心为 IAnchor)
 */
interface IRotate {
    /**
     * 旋转弧度 Math.PI * 2 为一周
     */
    rotateAngle?: number;
    /**
     * 旋转角度 360度 为一周
     */
    rotateDeg?: number;
}
/**
 * 由于某些属性不支持CanvasRenderingContext2D 故舍弃
 * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/font)
 */
interface IFont {
    /**
     * @description 字体
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)
     */
    fontFamily: Properties['fontFamily'];
    /**
     * @description 字体大小 当值为 number 时单位为px
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)
     */
    fontSize: Properties['fontSize'] | (number & {});
    /**
     * @description 字体样式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)
     */
    fontStyle?: Properties['fontStyle'];
    /**
     * @description 字体的粗细程度
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
     */
    fontWeight?: Properties['fontWeight'];
}
interface TextBaseStyle extends IFont, IColor, IAnchor, IRotate {
    /**
     * 指定绘制文本时字体如何被扩展或压缩
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontStretch)
     */
    fontStretch?: CanvasFontStretch;
    /**
     * 用于指定渲染文本的替代大写形式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
     */
    fontVariantCaps?: CanvasFontVariantCaps;
    /**
     * 用于指定绘制文本时字母之间的间距
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
     */
    letterSpacing?: string | number;
    /**
     * 指定绘制文本时单词之间的间距
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
     */
    wordSpacing?: string | number;
    /**
     * 文本时文本的对齐方式
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign)
     */
    textAlign?: CanvasTextAlign;
    /**
     * 绘制文本时使用的文本基线 建议使用top 即文本坐标为右上角(由于设备差异或者字体差异导致这个坐标是预估的, 尤其是y坐标, 不适合精细的绘制)
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline)
     */
    textBaseline?: CanvasTextBaseline;
}
interface TextMultilineStyle extends TextBaseStyle {
    /**
     * 多行文本属性 行高 单位px
     */
    lineHeight?: number;
    /**
     * 多行文本属性 最大宽度 超过此宽度则换行
     */
    maxWidth?: number;
}
type ILinePosition = Array<[number, number]>;
interface LineStyle extends IColor, IRotate, IAnchor {
    /**
     * 虚线 为 true 时候取 [2,2]
     *[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)
     */
    dash?: boolean | Iterable<number>;
    /**
     * 虚线偏移量或者称为“相位”
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
     */
    dashOffset?: number;
    /**
     * 每一条线段的末端 默认 "butt"
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)
     */
    lineCap?: CanvasLineCap;
    /**
     * 用于设置 2 个线段如何连接在一起 默认值是 "miter"
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)
     */
    lineJoin?: CanvasLineJoin;
    /**
     * 当前点添加一条直线到当前子路径的起点。如果形状已经闭合或只有一个点，此函数将不执行任何操作
     * [MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/closePath)
     */
    close?: boolean;
}

export type { Anchor, IAnchor, IColor, IFont, ILinePosition, IRotate, LineStyle, TextBaseStyle, TextMultilineStyle };