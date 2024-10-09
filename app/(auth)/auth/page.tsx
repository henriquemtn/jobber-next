import { Button } from '@/components/ui/button'
import { AtSign, Lock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function AuthPage() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-y-2 items-center'>
            <Image
            src='/jobber-logo.png'  
            alt='logo'
            width={250}
            height={88}
            />
            <div className='max-w-[450px] flex flex-col items-center justify-center bg-white rounded- shadow-lg border-[#E1E1E1] border-[1px] mt-4 p-4'>
                <h3>Faça login para acessar o Jobber</h3>
                <form className='gap-2 pt-4 flex flex-col'>
                <label className="block">
                    <div className='border-[#E1E1E1] rounded-md border-[1px] flex flex-row items-center'>
                        <AtSign className='h-4 w-4 mx-2'/>
                        <input type="email" className="peer ..."/>
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid email address.
                        </p>
                    </div>
                </label>
                <label className="block">
                    <div className='border-[#E1E1E1] rounded-md border-[1px] flex flex-row items-center'>
                        <Lock className='h-4 w-4 mx-2'/>
                        <input type="password" className="w-full peer ..."/>
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid password address.
                        </p>
                    </div>
                </label>
                <span className='text-slate-900'>
                    <a href="/">Esqueci minha senha</a>
                </span>
                <Button>
                    Acessar
                </Button>
            </form>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="58" viewBox="0 0 1456.000000 581.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,581.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M2790 3823 c-32 -18 -66 -82 -464 -874 -323 -643 -429 -863 -429 -889 0 -77 54 -130 130 -130 77 0 93 20 210 255 l108 215 512 0 513 0 104 -209 c120 -238 139 -261 217 -261 42 0 55 5 85 33 31 28 37 41 40 83 4 48 -9 74 -423 899 -307 610 -435 855 -454 868 -39 28 -106 32 -149 10z m275 -813 l205 -410 -410 0 c-225 0 -410 2 -410 5 0 7 404 815 407 815 2 0 95 -184 208 -410z"></path><path d="M3763 3826 c-41 -19 -73 -70 -73 -119 0 -29 91 -219 424 -885 233 -466 433 -856 445 -866 15 -13 40 -21 79 -23 107 -7 71 -65 547 887 334 668 425 858 425 887 0 105 -116 166 -205 107 -20 -13 -117 -199 -388 -741 -199 -397 -364 -723 -367 -723 -3 0 -165 320 -360 710 -240 480 -365 721 -386 741 -38 36 -94 46 -141 25z"></path><path d="M8339 3817 c-73 -49 -70 8 -67 -947 3 -821 4 -856 22 -883 50 -74 169 -76 217 -3 12 17 15 134 19 679 l5 658 518 -675 c284 -371 529 -684 544 -695 18 -15 40 -21 74 -21 58 0 103 33 119 88 8 25 10 305 8 884 l-3 847 -29 30 c-57 59 -135 59 -192 0 l-29 -30 -5 -652 -5 -651 -524 683 c-542 707 -545 711 -614 711 -13 0 -39 -10 -58 -23z"></path><path d="M10274 3826 c-96 -42 -107 -174 -20 -227 29 -18 56 -19 374 -19 l342 0 0 -770 c0 -823 -1 -810 49 -854 13 -12 41 -21 75 -24 50 -4 56 -2 92 31 l39 35 3 791 2 791 343 0 c325 0 344 1 375 20 34 21 62 72 62 112 0 37 -34 90 -71 110 -32 17 -78 18 -834 18 -647 -1 -806 -3 -831 -14z"></path><path d="M12461 3822 c-19 -10 -43 -34 -53 -53 -17 -32 -18 -80 -18 -887 0 -929 -3 -885 56 -931 36 -29 112 -29 148 0 59 46 56 2 56 931 0 807 -1 855 -18 887 -20 38 -73 71 -112 71 -14 0 -41 -8 -59 -18z"></path><path d="M6322 3814 c-23 -9 -65 -37 -92 -62 -46 -44 -79 -105 -446 -842 -223 -447 -398 -811 -401 -832 -7 -49 12 -93 51 -121 27 -19 43 -22 136 -22 216 1 408 97 550 274 62 77 51 56 395 781 152 322 284 591 293 598 23 17 66 15 85 -6 13 -14 697 -1386 697 -1398 0 -20 -119 38 -180 87 -23 19 -62 61 -85 94 -24 33 -145 276 -270 540 -125 264 -229 482 -231 484 -2 2 -31 -54 -65 -125 -55 -118 -60 -132 -50 -160 29 -80 381 -806 418 -860 122 -179 326 -295 542 -310 106 -8 160 5 195 47 55 65 65 40 -368 916 -217 439 -408 814 -424 833 -95 114 -298 133 -405 37 -49 -44 -166 -269 -442 -852 -125 -264 -243 -504 -262 -532 -19 -29 -57 -73 -85 -98 -49 -44 -168 -110 -186 -104 -5 2 147 320 338 707 327 658 350 703 377 708 25 5 38 22 86 107 50 90 55 103 39 111 -30 17 -163 17 -210 0z"></path></g></svg>
        </div>
    </div>
  )
}
