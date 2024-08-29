"use client";
import {
  UilAngleDown,
  UilBell,
  UilDollarSign,
  UilSetting,
  UilSignout,
  UilUser,
  UilUsersAlt,
} from "@iconscout/react-unicons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Heading from "@/components/Heading";
import PopOver from "@/components/Popup/PopOver";
import DropDown from "@/components/Dropdown";
import { logOutAction, useAppDispatch, useAppSelector } from "@/redux";
import { signOut } from "next-auth/react";

interface Props {
  rtl: boolean;
}

interface ProfileConfig {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const profileActions: ProfileConfig[] = [
  {
    name: "Hồ sơ",
    path: "#",
    icon: <UilUser className="h-4 w-4 ltr:mr-3 rtl:ml-3" />,
  },
  {
    name: "Cài đặt",
    path: "#",
    icon: <UilSetting className="h-4 w-4 ltr:mr-3 rtl:ml-3" />,
  },
  {
    name: "Hóa đơn",
    path: "#",
    icon: <UilDollarSign className="h-4 w-4 ltr:mr-3 rtl:ml-3" />,
  },
  {
    name: "Hoạt động",
    path: "#",
    icon: <UilUsersAlt className="h-4 w-4 ltr:mr-3 rtl:ml-3" />,
  },
];

const AuthInfo = ({}: Props) => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const { user } = useAppSelector((state) => state.auth);

  // State
  const [state, setState] = useState({ flag: "vi" });

  const userContent = (
    <div>
      <div className="min-w-[280px] sm:min-w-full">
        <figure className="mb-[12px] flex items-center rounded-[8px] bg-section px-[25px] py-[20px] text-sm dark:bg-white/10">
          <Image
            className="rounded-full ltr:mr-4 rtl:ml-4"
            src={user?.image ?? "/img/avatar/chat-auth.png"}
            alt=""
            width="50"
            height="50"
          />
          <figcaption>
            <Heading
              className="mb-0.5 text-sm text-dark dark:text-white/[.87]"
              as="h5"
            >
              {user?.name ?? "Hồ Văn Toàn"}
            </Heading>
            <p className="mb-0 text-xs text-body dark:text-white/60">
              Hồ Văn Toàn
            </p>
          </figcaption>
        </figure>
        <ul className="mb-[10px]">
          {profileActions.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className="inline-flex w-full items-center rounded-4 px-2.5 py-3 text-sm text-light transition-all delay-150 ease-in-out hover:bg-primary/[.05] hover:pl-6 hover:text-primary dark:rounded-4 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => {
            signOut();
            dispatch(logOutAction());
          }}
          className="mx-[-12px] mb-[-15px] flex h-[50px] items-center justify-center rounded-b-6 bg-[#f4f5f7] text-sm font-medium text-light hover:text-primary dark:bg-[#32333f] dark:text-white/[.87] dark:hover:text-white/60"
        >
          <UilSignout className="h-4 w-4 ltr:mr-3 rtl:ml-3" /> Đăng xuất
        </div>
      </div>
    </div>
  );

  const onFlagChangeHandle = (
    value: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setState({
      ...state,
      flag: value,
    });

    i18n.changeLanguage(value);
  };

  const country = [
    {
      key: "1",
      label: (
        <Link
          href="#"
          onClick={(e) => onFlagChangeHandle("en", e)}
          className="flex items-center rounded-4 bg-white px-3 py-1.5 text-sm text-dark hover:bg-primary/[.05] dark:bg-white/10 dark:text-white/60"
        >
          <Image
            className="h-3.5 w-3.5 ltr:mr-2 rtl:ml-2"
            src="/img/flag/en.png"
            alt=""
            width="20"
            height="20"
          />
          <span>English</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="#"
          onClick={(e) => onFlagChangeHandle("vi", e)}
          className="flex items-center rounded-4 bg-white px-3 py-1.5 text-sm text-dark hover:bg-primary/[.05] dark:bg-white/10 dark:text-white/60"
        >
          <Image
            className="h-3.5 w-3.5 ltr:mr-2 rtl:ml-2"
            src="/img/flag/vi.png"
            alt=""
            width="20"
            height="20"
          />
          <span>Tiếng việt</span>
        </Link>
      ),
    },
  ];

  return (
    <div className="flex flex-auto items-center justify-end gap-6 lg:gap-4">
      <div className="flex">
        <DropDown placement="bottomRight" customContent={country}>
          <div className="flex">
            <Image src="/img/flag/en.png" alt="" width="20" height="20" />
          </div>
        </DropDown>
      </div>
      <div className="flex">
        <PopOver placement="bottomRight" content={userContent} action="click">
          <div className="flex items-center overflow-x-auto whitespace-nowrap text-light">
            <Image
              src={user?.image ?? "/img/avatar/matureman1.png"}
              alt="Avatar"
              width="32"
              height="32"
              className="rounded-full"
            />
            <span className="me-1.5 ms-2.5 text-sm font-medium text-body dark:text-white/60 lg:ms-1.5 md:hidden">
              {user?.name}
            </span>
            <UilAngleDown className="h-4 w-4 min-w-[16px]" />
          </div>
        </PopOver>
      </div>
    </div>
  );
};

export default AuthInfo;
