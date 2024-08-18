import React from 'react';
import { Dropdown } from 'antd';



export type DropDownProps = {
  action?: 'click' | 'hover' | 'contextMenu';
  customContent?: any;
  placement?: "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight" | "top" | "bottom";
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}
function DropDown(props: DropDownProps) {
  const { customContent, placement, action, children, style, className } = props;


  return (
    <Dropdown
      menu={{ items: customContent }}
      overlayClassName={className}
      overlayStyle={style}
      placement={placement}
      trigger={action ? [action] : ['hover']}
    >
      <span>{children}</span>
    </Dropdown>
  );
}




export default DropDown;
