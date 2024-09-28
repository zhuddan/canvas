import React, { Children, useCallback, useEffect, useMemo, useState } from 'react'
import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'
import type { Monaco } from '@monaco-editor/react'
import Editor from '@monaco-editor/react'

// eslint-disable-next-line import/no-webpack-loader-syntax
import devDts from '!!raw-loader!@zd~/canvas/dist/index.d.ts'
// eslint-disable-next-line import/no-webpack-loader-syntax
import js from '!!raw-loader!@zd~/canvas/dist/index.esm.js'

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

  return (
    <>
      {tips && <Tips />}
      <div
        className="border border-solid border-[#e4e7eb] shadow grid xl:grid-cols-2"
      >
        <div className="h-[350px] flex flex-col   border-[#ccc]">
          <div className=" border-b border-gray-200 p-2">
            index.ts
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

        <div className="h-[350px]  border-[red] box-border">
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
        <div className="bg-white col-span-2 p-2">
          <button type="button" className="flex bg-transparent border-none hover:cursor-pointer">
            <Arrow></Arrow>
            展开
          </button>
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

function Arrow() {
  return (
    <svg className="rotate-0 inline me-1.5 text-xl" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd" transform="translate(-446 -398)">
        <path fill="currentColor" fill-rule="nonzero" d="M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z" transform="translate(356.5 164.5)"></path>
        <polygon points="446 418 466 418 466 398 446 398"></polygon>
      </g>
    </svg>
  )
}
