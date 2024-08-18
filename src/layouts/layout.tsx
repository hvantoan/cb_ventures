"use client";

import {
    LogoutOutlined,
    PlusCircleFilled,
    SearchOutlined,
} from "@ant-design/icons";
import { UilQuestionCircle, UilGithub } from "@iconscout/react-unicons";
import type { ProSettings } from "@ant-design/pro-components";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown, Input, theme } from "antd";
import React, { useState } from "react";
import { defaultProps } from "@/layouts/_defaultProps";
import { primaryColor } from "@/theme";
import { whColor, whiteColor } from '../theme/themeVariables';

const SearchInput = () => {
    const { token } = theme.useToken();
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: "flex",
                alignItems: "center",
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorTextLightSolid,
                        }}
                    />
                }
                placeholder="Tìm kiếm"
                variant="borderless"
            />
            <PlusCircleFilled
                style={{
                    color: token.colorPrimary,
                    fontSize: 24,
                }}
            />
        </div>
    );
};

const LandingLayout: React.FC<WrappedComponentProps> = ({ children }) => {
    const [settings] = useState<Partial<ProSettings> | undefined>({
        fixedHeader: true,
        layout: "top",
        colorPrimary: whColor,
        colorWeak: false,
        navTheme: undefined,
    });

    const [pathname, setPathname] = useState("/");
    if (typeof document === "undefined") {
        return <div />;
    }
    return (
        <ProLayout
            logo="/img/logo_horizontal.png"
            about="Hệ thống quản lý"
            {...defaultProps}
            location={{
                pathname,
            }}
            pageTitleRender={false}
            token={{
                bgLayout: whColor,
                pageContainer: {
                    colorBgPageContainer: whColor,
                    paddingBlockPageContainerContent: 0,
                    paddingInlinePageContainerContent: 0,
                },

                header: {
                    colorBgHeader: "transparent",
                    colorBgMenuItemSelected: whColor,
                    colorBgScrollHeader: whColor,
                    colorBgMenuElevated: whColor,
                    colorBgMenuItemHover: whColor,
                    colorBgRightActionsItemHover: whColor,
                    colorTextMenu: whiteColor,
                    colorTextMenuActive: primaryColor,
                    colorTextMenuSelected: primaryColor,
                    heightLayoutHeader: 64,
                },
            }}
            menu={{
                collapsedShowGroupTitle: true,
                defaultOpenAll: true,
            }}
            avatarProps={{
                src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
                size: "small",
                title: "Hồ Văn Toàn",
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: "logout",
                                        icon: <LogoutOutlined />,
                                        label: "Đăng xuất",
                                    },
                                ],
                            }}
                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            subMenuItemRender={(item, dom) => {
                console.log(item);
                return <div className="bg-wh_color">{dom}</div>;
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                if (typeof window === "undefined") return [];
                return (
                    <div className="grid grid-cols-2 gap-4  items-center justify-center h-16">
                        <UilQuestionCircle key="UilQuestionCircle" className="h-6 w-6" />
                        <UilGithub key="UilGithub" className="h-6 w-6" />
                    </div>
                )
            }}
            breadcrumbRender={undefined}
            headerTitleRender={(logo) => {
                return <a>{logo}</a>;
            }}
            headerRender={(_, dom) => {
                return <div className="container mx-auto flex items-center">{dom}</div>;
            }}
            onMenuHeaderClick={(e) => console.log("Tab", e)}
            menuItemRender={(item, dom) => {
                return <div onClick={() => setPathname(item.path ?? "/")}>{dom}</div>;
            }}
            {...settings}
        >
            {children}
        </ProLayout>
    );
};

export { LandingLayout };
