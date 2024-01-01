import React from "react"
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data, reference }) {
    
    return (
        <>
            <motion.div drag   dragConstraints={{ left: 0, right: 600, top:50, bottom:400 }} whileDrag={{scale:1.2}}
             className='relative w-52 h-64 rounded-[30px] bg-zinc-900 text-white p-5 overflow-hidden'>
                <FaRegFileAlt />
                <p className=" text-sm leading-tight mt-3">{data.desc}</p>
                <div className="absolute footer bottom-0 w-full left-0  ">
                    <div className="flex justify-between  items-center mb-2 px-6 py-2">
                        <h5 >{data.fileSize}</h5>
                        <span className="w-7 h-7 rounded-full bg-zinc-400 text-black flex justify-center items-center">
                            {data.close ? <IoMdClose /> : <MdFileDownload />}
                        </span>
                    </div>

                    {data.tagDets.isOpen ? (
                        <div className={`subfooter ${data.tagDets.tagColor==="blue"?"bg-blue-600": "bg-green-600"} w-full py-2 flex items-center justify-center font-medium`}>
                            <h3>{data.tagDets.tagTitle}</h3>
                        </div>
                    ) : null}
                </div>

            </motion.div>

        </>
    )

}
export default Card