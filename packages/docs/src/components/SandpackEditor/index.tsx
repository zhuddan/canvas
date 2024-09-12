import React from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'

function SandpackEditor({ files }) {
  return (
    <Sandpack
      template="react"
      files={files}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
      }}
    />
  )
}

export default SandpackEditor
