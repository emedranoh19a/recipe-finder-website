export type ImagePaths = {
  large: string;
  small: string;
};
export type RecipeBasic = {
  id: number;
  title: string;
  image: ImagePaths;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
};

export type Recipe = RecipeBasic & {
  slug: string;
  ingredients: string[];
  instructions: string[];
};
