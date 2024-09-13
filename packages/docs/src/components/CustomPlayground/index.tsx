import React, { Children, useEffect, useMemo, useState } from 'react'
import { Sandpack, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import type { Monaco } from '@monaco-editor/react'
import Editor, { loader } from '@monaco-editor/react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import dts from '!!raw-loader!./zd-canvas.d.ts'

const customHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Playground</title>
    <style>
      html,body {
        width: 100% !important;
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
      }
    </style>
  </head>
  <body style="background:red">
    <script src="./index.ts" type="module"></script>
  </body>
</html>
  `

function CustomPlayground({ children }: React.PropsWithChildren) {
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
            wordWrapColumn: 80,
            wordWrap: 'bounded',
          }}
        />
      </div>
      <div style={{ flex: 1, overflow: 'hidden', height: '100%' }}>
        <SandpackProvider
          style={{ height: '100%' }}
          template="vanilla-ts"
          files={{
            '/index.ts': code,
            '/index.html': customHtml,
          }}
          customSetup={{
            entry: '/index.html',
            dependencies: {
              '@zd~/canvas': 'latest',
            },
          }}
        >
          <SandpackPreview
            style={{
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              padding: 0,
              margin: 0,
            }}
          />
        </SandpackProvider>
      </div>
    </div>
  )
}

export default CustomPlayground
