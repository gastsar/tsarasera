import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type CardDashboardProps = {
  icone: any;
  title: string;
  description: string;
};

export const CardDashboard = ({
  icone,
  title,
  description,
}: CardDashboardProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{icone}</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className=" font-bold">{title}</h3>
          <p>{description}</p>
        </CardContent>
      </Card>
    </>
  );
};
