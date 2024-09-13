import React, { Children, useEffect, useMemo, useState } from 'react'
import { Sandpack, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import type { Monaco } from '@monaco-editor/react'
import Editor, { loader } from '@monaco-editor/react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import dts from '!!raw-loader!./zd-canvas.d.ts'

interface CustomPlaygroundProps {
  children: string
}

const CustomPlayground: React.FC<CustomPlaygroundProps> = ({ children }) => {
  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      declare module '@zd~/canvas' {
        ${dts}
      }
      `,
    )
  }
  const [code, setCode] = useState(
    // eslint-disable-next-line react/no-children-to-array
    getStringChildren(React.Children.toArray(children)) || '',
  )

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '')
  }

  function getStringChildren(
    children: Array<Exclude<React.ReactNode, boolean | null | undefined>>,
  ): string | undefined {
    for (let index = 0; index < children.length; index++) {
      const element = children[index]
      if (typeof element === 'string') {
        return element
      }
      if (typeof element === 'object' && 'props' in element) {
        if (element.props.children) {
          // eslint-disable-next-line react/no-children-to-array
          const code = getStringChildren(React.Children.toArray(element.props.children))
          if (code) {
            return code
          }
        }
      }
    }
    return undefined
  }

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
          template="vanilla-ts"
          files={{
            '/index.ts': code,
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
                 <script src="index.ts" type="module"></script>
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
          <SandpackPreview
            showNavigator={false}
            style={{ height: '100%' }}
          />
        </SandpackProvider>
      </div>
    </div>
  )
}

export default CustomPlayground
