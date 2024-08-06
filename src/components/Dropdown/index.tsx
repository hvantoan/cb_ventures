import React from 'react';
import Link from 'next/link';
import { Dropdown, MenuProps } from 'antd';
import { PrinterOutlined, FilePdfOutlined, FileTextOutlined, FileExcelOutlined, FileOutlined } from '@ant-design/icons';



export type DropDownProps = {
  action?: 'click' | 'hover' | 'contextMenu';
  customContent?: MenuProps;
  placement?: "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight" | "top" | "bottom";
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
function DropDown(props: any) {
  const { customContent, placement, action, children, style, className } = props;

  const items = [
    {
      key: '1',
      label: (
        <Link
          className="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm active"
          href="#"
        >
          <PrinterOutlined className="text-[14px] ltr:mr-2 rtl:ml-2" />
          <span>Printer</span>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link
          className="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm active"
          href="#"
        >
          <FilePdfOutlined className="text-[14px] ltr:mr-2 rtl:ml-2" />
          <span>PDF</span>
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link
          className="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm active"
          href="#"
        >
          <FileTextOutlined className="text-[14px] ltr:mr-2 rtl:ml-2" />
          <span>Google Sheets</span>
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link
          className="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm active"
          href="#"
        >
          <FileExcelOutlined className="text-[14px] ltr:mr-2 rtl:ml-2" />
          <span>Excel (XLSX)</span>
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link
          className="flex items-center text-theme-gray dark:text-white/60 hover:bg-primary-transparent hover:text-primary dark:hover:bg-white/10 px-3 py-1.5 text-sm active"
          href="#"
        >
          <FileOutlined className="text-[14px] ltr:mr-2 rtl:ml-2" />
          <span>CSV</span>
        </Link>
      ),
    },
  ];

  return (
    <>
      <Dropdown
        menu={{ items: customContent ? customContent : items }}
        overlayClassName={className}
        overlayStyle={style}
        placement={placement}
        trigger={action ? [action] : ['hover']}
      >
        <span>{children}</span>
      </Dropdown>
    </>
  );
}




export default DropDown;
