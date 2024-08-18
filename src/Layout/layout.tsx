'use client'

import {
    GithubFilled,
    LogoutOutlined,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import {
    Button,
    ConfigProvider,
    Dropdown,
    Input,
    theme,
} from 'antd';
import React, { useState } from 'react';
import { defaultProps } from './_defaultProps';
import LandingFooter from '@/components/Footer/LandingFooter';

const SearchInput = () => {
    const { token } = theme.useToken();
    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: 'flex',
                alignItems: 'center',
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
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
    });

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
    if (typeof document === 'undefined') {
        return <div />;
    }
    return (
        <ProLayout
            title=""
            logo="/img/logo_horizontal.png"
            prefixCls="my-prefix"
            bgLayoutImgList={[]}
            {...defaultProps}
            location={{
                pathname,
            }}
            token={{
                header: {
                    colorBgHeader: "transparent",
                    colorTextMenu: "#ffffff",
                    colorTextMenuActive: "",
                },
            }}
            siderMenuType="group"
            menu={{
                collapsedShowGroupTitle: true,
            }}
            avatarProps={{
                src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                size: 'small',
                title: 'Hồ Văn Toàn',
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'logout',
                                        icon: <LogoutOutlined />,
                                        label: 'Đăng xuất',
                                    },
                                ],
                            }}
                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                if (typeof window === 'undefined') return [];
                return [
                    props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                        <SearchInput />
                    ) : undefined,
                    <QuestionCircleFilled key="QuestionCircleFilled" />,
                    <GithubFilled key="GithubFilled" />,
                ];
            }}
            headerTitleRender={(logo, title, _) => {
                const defaultDom = (
                    <a>{logo}</a>
                );
                if (typeof window === 'undefined') return defaultDom;
                if (document.body.clientWidth < 1400) {
                    return defaultDom;
                }
                if (_.isMobile) return defaultDom;
                return (
                    <>
                        {defaultDom}
                    </>
                );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
                <div onClick={() => setPathname(item.path ?? '/welcome')} >{dom}</div>
            )}
            {...settings}
        >
            {children}
        </ProLayout>
    );
};

export { LandingLayout }