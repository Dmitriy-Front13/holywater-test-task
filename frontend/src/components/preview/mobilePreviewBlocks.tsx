import { ISection } from "@/types";
import { Button, Carousel, CarouselContent, CarouselItem } from "../ui";
import { Play } from "lucide-react";

interface IMobilePreviewBlockProps {
  section: ISection;
}

export const Slider = ({ section }: IMobilePreviewBlockProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {section.items.map((item) => (
          <CarouselItem key={item.title}>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-[200px] h-[300px] mx-auto object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export const Banner = ({ section }: IMobilePreviewBlockProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="w-full h-[140px] flex">
        <div className="w-1/3 h-full">
          <img
            src={section.items[0].image || "/placeholder.svg"}
            alt={section.items[0].title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-2/3 p-3 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">
              {section.items[0].title}
            </h3>
            <p className="text-gray-300 text-xs mt-1 line-clamp-3">
              {section.items[0].description}
            </p>
          </div>

          <Button
            className="bg-black/50 text-white w-full mt-2 h-8 rounded-md"
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
  return (
    <div className="grid grid-cols-2 gap-3 overflow-x-auto">
      {section.items.map((item) => (
        <div key={item._id} className="overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full aspect-1/2 object-cover rounded-lg mb-1"
          />
          <div className="text-sm font-medium truncate">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export const VerticalGrid = ({ section }: IMobilePreviewBlockProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {section.items.map((item) => (
        <div key={item._id} className="overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-full aspect-1/2 object-cover rounded-lg mb-1"
          />
          <div className="text-sm font-medium truncate">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export const HorizontalList = ({ section }: IMobilePreviewBlockProps) => {
  return (
    <div className="flex overflow-x-auto gap-3 pb-2">
      {section.items.map((item) => (
        <div key={item._id} className="flex-shrink-0 w-[100px]">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="w-[100px] h-[100px] object-cover rounded-lg mb-1"
          />
          <p className="text-sm font-medium truncate">{item.title}</p>
        </div>
      ))}
    </div>
  );
};
