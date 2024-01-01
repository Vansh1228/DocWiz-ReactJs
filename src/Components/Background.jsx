import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed w-full h-screen z-[2]'>

        <div className='absolute top-[5%] flex justify-center w-full py-10 text-zinc-600 '>
          Documents
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%]
       -translate-y-[50%] text-[13vw] tracking-tighter font-semibold text-zinc-900'>
          Docwiz.
        </h1>
      </div>

    </>
  )
}

export default Background
