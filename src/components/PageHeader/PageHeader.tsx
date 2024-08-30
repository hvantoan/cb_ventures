import { Button } from "antd";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  backTo?: string;
  children?: React.ReactNode;
  title: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ backTo, children, title }) => {
  const route = useRouter();
  return (
    <div className="flex flex-col justify-between gap-2 md:flex-row">
      <div className="flex gap-2">
        {Boolean(backTo) && (
          <Button className="h-fit" onClick={() => route.push(backTo!)}>
            <span className="i-solar-alt-arrow-left-linear h-4 w-4" />
          </Button>
        )}
        <div className="flex justify-between gap-2 md:flex-row md:justify-start">
          {title}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageHeader;
