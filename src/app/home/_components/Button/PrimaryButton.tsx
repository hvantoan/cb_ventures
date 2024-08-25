import { Button } from "antd";
import { FC } from "react";

const PrimaryButton: FC<WrappedComponentProps> = ({ children }) => (
    <Button className="hover:bg-secondary gap-2 p-6 group bg-primary border-transparent" htmlType="button">
        {children}
    </Button>
);


const SubButton: FC<WrappedComponentProps> = ({ children }) => (
    <Button className="p-6 text-16 bg-transparent text-secondary border-secondary" htmlType="button">
        {children}
    </Button>
);


export { PrimaryButton, SubButton };
