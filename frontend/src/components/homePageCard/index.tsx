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
  Badge,
} from "@/components/ui";
import { ArrowRight, Clock } from "lucide-react";

interface HomePageCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export const HomePageCard = ({
  title,
  description,
  link,
  icon,
  isActive,
}: HomePageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ${
        isActive
          ? "hover:shadow-lg border-2 hover:border-primary/50"
          : "opacity-80 border-2 border-muted"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {!isActive && (
            <Badge
              variant="outline"
              className="bg-muted text-muted-foreground border-muted-foreground/30"
            >
              <Clock className="h-3 w-3 mr-1" /> Скоро
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <CardDescription className="text-sm text-muted-foreground">
          {description}
          {/* {!isActive && (
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              Цей розділ знаходиться в розробці та буде доступний найближчим
              часом.
            </p>
          )} */}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0 pb-4">
        {isActive ? (
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
        ) : (
          <Button
            variant="outline"
            className="w-full cursor-not-allowed opacity-70"
            disabled
          >
            <span>Недоступно</span>
            <Clock className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
