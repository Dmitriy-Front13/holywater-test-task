import { ISection } from "@/types";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../../shared/ui";
import { Play, Inbox } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

interface EmptySectionPlaceholderProps {
  message?: string;
}

const EmptySectionPlaceholder = ({
  message = "У цьому блоці ще немає контенту.",
}: EmptySectionPlaceholderProps) => (
  <div className="w-full text-center py-6 px-4 text-muted-foreground text-sm italic border border-dashed rounded-md flex flex-col items-center gap-2">
    <Inbox className="w-6 h-6 opacity-40" />
    <span>{message}</span>
  </div>
);

interface IMobilePreviewBlockProps {
  section: ISection;
}

export const Slider = ({ section }: IMobilePreviewBlockProps) => {
  if (section.items.length === 0) {
    return <EmptySectionPlaceholder message="Слайдер порожній." />;
  }
  return (
    <Carousel>
      <CarouselContent>
        {section.items.map((item) => (
          <CarouselItem key={item._id}>
            <img
              src={`${item.imageURL}` || "/placeholder.svg"}
              alt={item.title}
              className="w-[200px] h-[300px] mx-auto object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
};

export const Banner = ({ section }: IMobilePreviewBlockProps) => {
  if (section.items.length === 0 || !section.items[0]) {
    return <EmptySectionPlaceholder message="Банер ще не заповнений." />;
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="w-full h-[140px] flex gap-3">
        <div className="w-1/3 h-full">
          <img
            src={`${section.items[0].imageURL}` || "/placeholder.svg"}
            alt={section.items[0].title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-between">
          <div>
            <h3 className=" font-bold text-lg">{section.items[0].title}</h3>
            <p className="text-gray-300 text-xs mt-1 line-clamp-3">
              {section.items[0].description}
            </p>
          </div>

          <Button
            className="bg-black/50 text-white w-full mt-2 h-8 rounded-full"
            size="sm"
          >
            <Play className="h-3.5 w-3.5 mr-1.5" /> Watch Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export const HorizontalGrid = ({ section }: IMobilePreviewBlockProps) => {
  if (section.items.length === 0) {
    return <EmptySectionPlaceholder message="Горизонтальна сітка порожня." />;
  }

  return (
    <div className="grid grid-rows-[160px_160px] grid-flow-col auto-cols-[calc((100%-3rem)/2)] gap-3 overflow-x-auto without-scrollbar">
      {section.items.map((item) => (
        <Fragment key={item._id}>
          <img
            src={`${item.imageURL}` || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
          />
          {section.showItemsTitle && (
            <div className="text-sm font-medium truncate">{item.title}</div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export const VerticalGrid = ({ section }: IMobilePreviewBlockProps) => {
  if (section.items.length === 0) {
    return <EmptySectionPlaceholder message="Вертикальна сітка порожня." />;
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {section.items.map((item) => (
        <div key={item._id} className="overflow-hidden">
          <img
            src={`${item.imageURL}` || "/placeholder.svg"}
            alt={item.title}
            className="w-full aspect-1/2 object-cover rounded-lg mb-1"
          />
          {section.showItemsTitle && (
            <div className="text-sm font-medium truncate">{item.title}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export const HorizontalList = ({ section }: IMobilePreviewBlockProps) => {
  if (section.items.length === 0) {
    return (
      <EmptySectionPlaceholder message="Горизонтальний список порожній." />
    );
  }

  return (
    <div className="flex overflow-x-auto without-scrollbar gap-3 pb-2">
      {section.items.map((item) => (
        <div key={item._id} className="flex-shrink-0 w-[100px]">
          <img
            src={`${item.imageURL}` || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-[160px] object-cover rounded-lg mb-1"
          />
          <p className="text-sm font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
