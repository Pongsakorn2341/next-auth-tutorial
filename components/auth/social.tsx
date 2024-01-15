'use client';

import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

// import { FcGoo } from 'react-icons/fc'

export const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
        <Button
            size="lg"
            className='w-full'
            value="outline"
            onClick={() => {}}
        >
            <FcGoogle className='h-5 w-5' />
        </Button>
        <Button
            size="lg"
            className='w-full'
            value="outline"
            onClick={() => {}}
        >
            <FaGithub className='h-5 w-5' />
        </Button>
    </div>
  )
}
