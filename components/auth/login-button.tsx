'use client';

import { useRouter } from "next/navigation";

type LoginButtonProps = {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean;
}

const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {

  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  }

  if (mode == "modal") {
    return (
      <span>
        TODO: IMPLEMENT MODAL
      </span>
    )
  }

    return (
    <div>
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    </div>
  )
}

export default LoginButton