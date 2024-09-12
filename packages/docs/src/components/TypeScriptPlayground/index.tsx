import React, { useEffect, useRef } from 'react'
import { createPlayground } from '@typescript/playground'

interface TypeScriptPlaygroundProps {
  code: string
}

const TypeScriptPlayground: React.FC<TypeScriptPlaygroundProps> = ({ code }) => {
  const playgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (playgroundRef.current) {
      const playground = createPlayground(playgroundRef.current, {
        text: code,
        compilerOptions: {
          strict: true,
        },
      })

      return () => {
        playground.destroy()
      }
    }
  }, [code])

  return <div ref={playgroundRef} style={{ height: '400px', width: '100%' }} />
}

export default TypeScriptPlayground
