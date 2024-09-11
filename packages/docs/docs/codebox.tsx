import React from 'react'

function CodeSandboxEmbed({ id, title = 'CodeSandbox Example' }) {
  // 构建嵌入 URL
  const embedUrl = `https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark&view=split`

  return (
    <iframe
      src={embedUrl}
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  )
}

export default CodeSandboxEmbed
