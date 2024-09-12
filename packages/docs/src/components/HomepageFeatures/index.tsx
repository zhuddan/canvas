import clsx from 'clsx'
import Heading from '@theme/Heading'

interface FeatureItem {
  title: string
  icon: string // React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '多平台支持',
    icon: '🌐',
    description: (<>
      兼容原生 Web、uni-app 和微信小程序，代码无需修改即可跨平台使用。
    </>),
  },
  {
    title: '性能优化',
    icon: '⚡️',
    description: (<>
      自动排除无效绘制，显著提升渲染效率。
    </>),
  },
  {
    title: '动画支持',
    icon: '🎞️',
    description: (<>
      轻松实现流畅的动画效果。
    </>),
  },
  {
    title: '形变与变换',
    icon: '🔄',
    description: (<>
      支持旋转、缩放和平移等形变操作，更加自由地控制对象的形态。
    </>),
  },
  {
    title: '滤镜与阴影',
    icon: '✨',
    description: (<>
      全面支持滤镜和阴影效果，为绘制内容增添丰富的视觉效果。
    </>),
  },
  {
    title: '文本',
    icon: '📝',
    description: (<>
      支持多行文本绘制、行高设置，适用于复杂的文本布局需求。
    </>),
  },
  {
    title: '图形',
    icon: '🖼️',
    description: (<>
      简化了图像的加载与绘制过程，提供圆角、对象适配（ObjectFit）等高级属性，使图形绘制更加灵活多样。
    </>),
  },
  {
    title: '几何图形',
    icon: '🔷',
    description: (<>
      封装了常用绘制方法，支持链式调用与路径组合，轻松绘制复杂图形。
    </>),
  },
]

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3 ', {
      'mt-4': true,
    })}
    >
      <div className="shadow" style={{ height: '100%' }}>
        <div className="text--center ">
          {icon}
        </div>
        <div className="text--center padding-horiz--md ">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex items-center p-8 w-full">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
