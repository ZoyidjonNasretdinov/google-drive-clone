import React from 'react'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='h-[90vh] w-72 fixed top-[10vh] left-0 z-30 bg-[#f6f9fc] dark:bg-[#1f1f1f] border-right'>
      <div className='flex flex-col p-3'>
        <Button className='w-fit h-12 rounded-full px-6'>
          <Plus></Plus>
          <span>New</span>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar