export type ImagePaths = {
  large: string;
  small: string;
};
export type RecipeBasic = {
  id: number;
  title: string;
  slug: string;
  image: ImagePaths;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
};

export type Recipe = RecipeBasic & {
  ingredients: string[];
  instructions: string[];
};
