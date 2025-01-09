import { Separator } from '@radix-ui/react-dropdown-menu'
import { FileUp, Folder, FolderUp } from 'lucide-react'
import React from 'react'

const PopoverActions = () => {
  return (
    <>
      <div className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm'>
        <Folder className='w-4 h-4'/>
        <span>New Folder</span>
      </div>
      <Separator />
      <div className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm'>
        <FileUp className='w-4 h-4'/>
        <span>File Upload</span>
      </div>
      <div className='flex items-center hover:bg-secondary transition py-2 px-4 space-x-2 text-sm'>
        <FolderUp className='w-4 h-4'/>
        <span>Folder Upload</span>
      </div>
    </>
  )
}

export default PopoverActions