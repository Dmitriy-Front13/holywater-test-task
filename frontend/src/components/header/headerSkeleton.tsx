import { Skeleton } from "../ui/skeleton";

export const HeaderSkeleton = () => {
  console.log("HeaderSkeleton");
  return (
    <>
      <Skeleton className="w-[250px] h-9" />
      <Skeleton className="w-[100px] h-9" />
    </>
  );
};
