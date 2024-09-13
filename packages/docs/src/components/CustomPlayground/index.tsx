import React from 'react'
import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import type { Monaco } from '@monaco-editor/react'
import Editor, { loader } from '@monaco-editor/react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import dts from '!!raw-loader!./zd-canvas.d.ts'

// 添加类型定义
const zdcanvasTypes = `
declare module '@zd~/canvas' {
  ${dts}
}
`

interface CustomPlaygroundProps {
  children: string
}

const CustomPlayground: React.FC<CustomPlaygroundProps> = ({ children }) => {
  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      zdcanvasTypes,
      // '../../../../core/dist/index.d.ts',
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
                html, body {
                  margin: 0 !important;
                  padding: 0 !important;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                }
              </style>
   
              <body style="margin: 0 !important; padding: 0 !important;">
                 <script src="index.js" type="module"></script>
              </body>
            </html>
            `,
          }}
          customSetup={{
            entry: '/index.html',
            dependencies: {
              '@zd~/canvas': 'latest',
              'tweakpane': 'latest',
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
