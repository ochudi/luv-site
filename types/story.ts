export interface Story {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  images: string[];
  content: string[];
  /**
   * Topic tags used for filtering on the All Stories page. Values are message
   * keys resolved via `stories.tags.<tag>` (see messages/*.json). Defined on the
   * canonical English stories and merged onto other locales by slug in
   * `getStories`, so they are optional on the type.
   */
  tags?: string[];
}
