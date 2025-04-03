import { useAppSelector } from "@/redux/store";
import {
  Banner,
  HorizontalGrid,
  HorizontalList,
  Slider,
  VerticalGrid,
} from "./mobilePreviewBlocks";

export const MobilePreview = () => {
  const sections = useAppSelector((state) => state.activeConfig.sections);
  return (
    <div className="w-[320px] h-[580px] border-8 border-gray-800 rounded-[36px] overflow-hidden bg-white shadow-xl">
      <div className="h-6 bg-gray-800"></div>
      <div className="h-full overflow-y-auto p-4">
        {sections.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <p>No content to display</p>
            <p className="text-sm">Add sections in the Editor tab</p>
          </div>
        )}
        {sections.map((section) => (
          <div key={section._id} className="mb-6">
            {section.showTitle && (
              <h3 className="text-lg font-bold mb-2">{section.title}</h3>
            )}

            {section.type === "banner" && section.items[0] && (
              <Banner section={section} />
            )}

            {section.type === "slider" && <Slider section={section} />}

            {section.type === "horizontalList" && (
              <HorizontalList section={section} />
            )}

            {section.type === "horizontalGrid" && (
              <HorizontalGrid section={section} />
            )}

            {section.type === "verticalGrid" && (
              <VerticalGrid section={section} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
