import { FC } from "react";
import { ColumnItem } from "./column-item";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type ColumnProps = {
  label: string;
};

export const Column: FC<ColumnProps> = ({ label }) => {
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <Label htmlFor="start">{label}</Label>
      <Input id="input" placeholder="Type here..." />
      <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px] p-3 space-y-2">
        <ColumnItem />
        <ColumnItem />
      </div>
    </div>
  );
};

export default Column;
