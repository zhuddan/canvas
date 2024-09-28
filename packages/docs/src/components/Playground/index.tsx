/* eslint-disable import/no-webpack-loader-syntax */
import React, { Children, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import type { Monaco } from '@monaco-editor/react'
import Editor from '@monaco-editor/react'
import clsx from 'clsx'
import js from '!!raw-loader!@zd~/canvas/dist/index.esm.js'
import devDts from '!!raw-loader!@zd~/canvas/dist/index.d.ts'

const debug = false
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
  <body >
    <script src="./index.ts" type="module"></script>
  </body>
</html>
  `

function Playground({
  children,
  tips = false,
}: React.PropsWithChildren<{
  tips?: boolean | string
}>) {
  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      declare module '${debug ? './canvas' : '@zd~/canvas'}' {
        ${devDts}
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

  const sandpackRef = useRef()

  return (
    <>
      {tips && <Tips />}
      <div
        className="border border-solid border-[#e4e7eb] shadow grid xl:grid-cols-2 grid-cols-1 grid-rows-2 xl:grid-rows-1 "
      >
        <div
          className={clsx(
            'flex flex-col  h-[350px] xl:h-[500px] ',
          )}
        >
          <div
            className="shadow-lg p-2 flex justify-between"
          >
            <span>index.ts</span>
          </div>
          <Editor
            className="flex-1"
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

        <div
          className="h-[350px] xl:h-[500px]  border-[red] box-border"
          style={{
            borderTop: '1px solid #e4e7eb',
          }}
        >
          <SandpackProvider
            style={{ height: '100%' }}
            template="vanilla-ts"
            files={{
              '/index.html': customHtml,
              ...(
                debug
                  ? {
                      '/canvas.ts': js,
                    }
                  : undefined
              ),
              '/index.ts': code,
            }}
            customSetup={{
              entry: '/index.html',
              dependencies: {
                '@zd~/canvas': 'latest',
              },
            }}
          >
            <SandpackPreview
              ref={sandpackRef}
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
    </>
  )
}

function Tips({
  msg = '请尝试修改 Playground 中的代码，查看变化',
}: {
  msg?: string
}) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded shadow-md">
      <div className="flex items-center space-x-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          className="text-blue-500"
        >
          <path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128" />
        </svg>
        <h3 className="text-lg font-semibold text-blue-700 mb-0">动手实践</h3>
      </div>
      <div className="text-blue-600">
        {msg}
      </div>
    </div>
  )
}

export default Playground
