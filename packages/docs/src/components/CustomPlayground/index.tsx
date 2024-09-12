import React from 'react'
import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import Editor, { loader } from '@monaco-editor/react'

// 添加类型定义
const zdcanvasTypes = `
declare module '@zd~/canvas' {
  export class App {
    constructor(options: { backgroundColor: string; resizeTo: Window });
    canvas: HTMLCanvasElement;
    add(obj: any): void;
    ticker: { add(fn: () => void): void };
  }

  export class Text {
    constructor(options: {
      text: string;
      x: number;
      y: number;
      anchor: { x: number; y: number };
      style: { fontSize: number; fontWeight: string; fill: string };
    });
    rotation: number;
  }
}
`

interface CustomPlaygroundProps {
  children: string
}

const CustomPlayground: React.FC<CustomPlaygroundProps> = ({ children }) => {
  const handleEditorWillMount = (monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      zdcanvasTypes,
      '../../../../core/dist/index.d.ts',
    )
  }

  const handleEditorChange = (value: string | undefined) => {
    console.log('Code changed:', value)
  }

  const code = React.Children.toArray(children)[0]?.props.children.props.children
  console.log(code)
  return (
    <div style={{ display: 'flex', height: '600px', border: '1px solid #ccc' }}>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Editor
          height="100%"
          defaultLanguage="typescript"
          value={code}
          onChange={handleEditorChange}
          beforeMount={handleEditorWillMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
      <div style={{ flex: 1, overflow: 'hidden', height: '100%' }}>
        <SandpackProvider
          style={{ height: '100%' }}
          template="vanilla"
          files={{
            '/index.js': code,
            '/index.html': `
            <!DOCTYPE html>
            <html>
              <head>
                <title>@zd~/canvas Example</title>
              </head>
              <style>
                #app {
                  height: 100px;
                  background-color: #60a5fa;
                }
              </style>
              <body>
                <div id="app"></div>
              </body>
            </html>
            `,
          }}
          customSetup={{
            entry: '/index.html',
            dependencies: {
              // '@zd~/canvas': 'https://unpkg.com/@zd~/canvas@0.0.4/dist/index.esm.js',
            },
          }}
        >
          <SandpackPreview showNavigator={false} style={{ height: '100%' }} />
        </SandpackProvider>
      </div>
    </div>
  )
}

export default CustomPlayground
