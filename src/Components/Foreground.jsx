import React from 'react'
import Card from './Card'

function Foreground() {

   

    const data = [
        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize:"3.4 mb",
            close: false,
            tagDets:{isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        },

        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize:"0.9 mb",
            close: true,
            tagDets:{isOpen:true, tagTitle:"Upload", tagColor:"blue"}
        },

        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing.",
            fileSize:"1.2 mb",
            close: true,
            tagDets:{isOpen:false, tagTitle:"Download Now", tagColor:"green"}
        }
    ];

  return (
    <>
    <div   className='fixed  z-[3] w-full h-full top-0 left-0 flex gap-4 p-5 flex-wrap' >
          {data.map((item,index)=>(
            <Card  data={item} />
          )
          )
          }

        </div >
    </>
  )
}

export default Foreground
