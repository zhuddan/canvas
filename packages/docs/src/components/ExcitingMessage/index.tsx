import React from 'react'

function ExcitingMessage({ children }) {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
      <div className="flex items-center mb-2">
        {/* <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg> */}
        🎉🎉🎉
        <span className="font-bold">激动人心的消息!</span>
      </div>
      <p>{children}</p>
    </div>
  )
}

export default ExcitingMessage
