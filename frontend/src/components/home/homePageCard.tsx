import { useState } from "react";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/shared/ui";
import { ArrowRight } from "lucide-react";

interface HomePageCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

export const HomePageCard = ({
  title,
  description,
  link,
  icon,
}: HomePageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 $hover:shadow-lg border-2 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        <Button
          asChild
          variant="outline"
          className="w-full group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <Link to={`/${link}`}>
            <span>Перейти</span>
            <ArrowRight
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
