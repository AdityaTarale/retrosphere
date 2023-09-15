import { FC } from "react";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

type ColumnItemProps = {
  desc?: string;
};

export const ColumnItem: FC<ColumnItemProps> = () => {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Card Title</CardTitle> */}
        <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter>
        <caption>likes</caption>
      </CardFooter>
    </Card>
  );
};
