import { Button, ButtonProps } from "antd";
import { FC } from "react";

interface Props
  extends ButtonProps,
    React.RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...props }: Props) => (
  <Button
    {...props}
    className="group gap-2 border-transparent bg-primary p-6 hover:bg-secondary"
    htmlType="button"
  >
    {children}
  </Button>
);

const SubButton: FC<WrappedComponentProps> = ({ children }) => (
  <Button
    className="border-secondary bg-transparent p-6 text-16 text-secondary"
    htmlType="button"
  >
    {children}
  </Button>
);

export { PrimaryButton, SubButton };
