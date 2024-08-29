"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { ReactSVG } from "react-svg";

import { Col, Layout, Row } from "antd";
import { changeMenuCollapse, useAppDispatch, useAppSelector } from "@/redux";
import AuthInfo from "../auth-info/info";
import TopMenu from "../TopMenu";

const HeaderTop = () => {
  const dispatch = useAppDispatch();
  const [hide, setHide] = useState(true);

  const { rtlData, mode, topMenu, menuCollapse } = useAppSelector(
    (state) => state.layout,
  );

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);

    const updateDimensions: any = () => {
      if (window.innerWidth <= 1200) {
        dispatch(changeMenuCollapse(true));
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [dispatch]);

  const toggleCollapsed = (value: boolean) => {
    dispatch(changeMenuCollapse(value));
  };

  const onShowHide = () => {
    setHide(!hide);
  };

  return (
    <>
      <Layout.Header className="fixed top-0 z-[99] flex h-[72px] w-full items-center justify-between bg-transparent p-0 font-Jost shadow-card backdrop-blur-[30px] ltr:left-0 rtl:right-0">
        <div className="container mx-auto flex h-full flex-1 flex-row items-center">
          <div className="rtl:ssm::pl:[15px] grid h-full min-w-[280px] align-middle ssm:min-w-[220px] xs:min-w-[170px] ltr:pl-[30px] ltr:pr-5 ltr:ssm:pl-[15px] ltr:ssm:pr-[15px] xs:ltr:pl-[20px] rtl:pl-5 rtl:pr-[30px] rtl:ssm:pr-[15px] xs:rtl:pr-[20px]">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  className="w-full max-w-[120px] xs:max-w-[100px]"
                  src={
                    mode === "lightMode"
                      ? "/img/logo_horizontal.png"
                      : "/img/logo_horizontal.png"
                  }
                  alt="Logo"
                  width="140"
                  height="20"
                />
              </Link>
              {!topMenu ||
              (typeof window !== "undefined" && window.innerWidth <= 1200) ? (
                <button
                  className="border-none bg-transparent p-0 text-[#525768] hover:text-primary dark:border-transparent dark:bg-transparent dark:text-white/60 dark:hover:text-primary"
                  onClick={() => {
                    toggleCollapsed(!menuCollapse);
                  }}
                >
                  <ReactSVG
                    src={`/img/icon/left-bar.svg`}
                    className="[&>div>svg]:h-[20px] [&>div>svg]:w-[20px]"
                  />
                </button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-auto items-center justify-between ltr:mr-[10px] rtl:ml-[10px] [&>div:first-child]:flex [&>div]:items-center">
            {isBrowser && window.innerWidth > 1200 && topMenu ? (
              <TopMenu />
            ) : (
              <div />
            )}
            <div className="me-[17px] flex flex-row items-center md:hidden">
              {isBrowser && window.innerWidth > 1200 && topMenu ? (
                <div className="top-right-wrap flex">
                  <AuthInfo rtl={rtlData} />
                </div>
              ) : (
                <AuthInfo rtl={rtlData} />
              )}
            </div>
          </div>
          <div className="hidden items-center md:flex sm:gap-x-[10px] ltr:pr-[25px] ltr:ssm:pr-[10px] rtl:pl-[25px] rtl:ssm:pl-[10px]">
            <div
              className="inline-flex text-light dark:text-white/60"
              onClick={onShowHide}
            >
              <UilEllipsisV className="h-[18px] w-[18px]" />
            </div>
          </div>
        </div>
      </Layout.Header>
      <Row>
        <Col md={0} sm={24} xs={24}>
          <div
            className={`fixed top-0 w-full bg-white py-2.5 shadow-[0px_2px_30px_#9299b810] dark:bg-[#1b1e2b] md:px-[15px] md:py-2.5 ltr:left-0 rtl:right-0 [&>.hexadash-nav-actions__searchbar]:hidden ${hide ? "-z-10 mt-0 opacity-0" : "z-10 mt-[72px] opacity-100"}`}
          >
            <AuthInfo rtl={rtlData} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeaderTop;
