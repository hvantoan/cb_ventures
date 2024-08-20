import { Popover } from "antd"
import Image from "next/image"
import Heading from "../Heading"
import Link from "next/link"
import { UilUser, UilSetting, UilDollarSign, UilUsersAlt, UilBell, UilSignout } from '@iconscout/react-unicons';

interface AuthDropdownProps {
    children?: React.ReactNode
}

const AuthDropdown = ({ children }: AuthDropdownProps) => {
    // TODO: Implement handleLogout and get user info
    const user: any = {}
    const currentUser: any = {}


    const userContent = (
        <div>
            <div className="min-w-[280px] sm:min-w-full ">
                <figure className="flex items-center text-sm rounded-[8px] bg-section dark:bg-white/10 py-[20px] px-[25px] mb-[12px]">
                    <Image
                        className="rounded-full ltr:mr-4 rtl:ml-4"
                        src={user?.picture ?? '/img/avatar/chat-auth.png'}
                        alt=""
                        width="50"
                        height="50"
                    />
                    <figcaption>
                        <Heading className="text-dark dark:text-white/[.87] mb-0.5 text-sm" as="h5">
                            {user ? user.name : currentUser ? currentUser.displayName : 'Hồ Văn Toàn'}
                        </Heading>
                        <p className="mb-0 text-xs text-body dark:text-white/60">Chuyên gia UI</p>
                    </figcaption>
                </figure>
                <ul className="mb-[10px]">
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
                        >
                            <UilUser className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Hồ sơ
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
                        >
                            <UilSetting className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Cài đặt
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
                        >
                            <UilDollarSign className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Hóa đơn
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
                        >
                            <UilUsersAlt className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Hoạt động
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
                        >
                            <UilBell className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Giúp đỡ
                        </Link>
                    </li>
                </ul>
                <Link
                    onClick={() => {// TODO: Implement handleLogout
                    }}
                    href={user ? '/api/auth/logout' : '#'}
                    className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-light hover:text-primary dark:hover:text-white/60 dark:text-white/[.87] mx-[-12px] mb-[-15px] rounded-b-6"
                >
                    <UilSignout className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Đăng xuất
                </Link>
            </div>
        </div>
    )

    return (
        <Popover placement="bottomRight" content={userContent} trigger="click">
            {children}
        </Popover>
    )
}

export default AuthDropdown