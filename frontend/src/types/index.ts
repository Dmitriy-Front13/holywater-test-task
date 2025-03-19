
export const sectionTypes = ['slider', 'horizontalGrid', 'verticalGrid', 'banner', 'horizontalList'] as const;
export const sectionTitles = ['Top Chart', 'Most Trending', 'Continue Watching', 'Most Popular'] as const;

type SectionTypes = typeof sectionTypes[number];
type SectionTitle = typeof sectionTitles[number];

export interface ISectionItem {
  _id: string;
  title?: string;
  description?: string;
  imageURL: string;
  exclusive: boolean;
}

export interface ISection {
  _id: string;
  type: SectionTypes;
  title?: SectionTitle;
  items: ISectionItem[];
}

export interface IConfig {
  _id: string;
  name: string;
  isMain: boolean;
  sections: ISection[];
}