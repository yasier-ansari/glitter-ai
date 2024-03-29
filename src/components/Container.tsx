import { merge } from "@/assets/utils/merge";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge("mx-auto max-w-[1200px] px-8", className)}>
      {children}
    </div>
  );
};
