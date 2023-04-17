import CategoryListItem from "../components/CategoryListItem";
import { ColorTypes } from "../types/colorTypes";
import { CategoryNames } from "../types/serviceTypes";

type Props = {};

const categoriesArray: {
  name: string;
  color: ColorTypes;
  to: string;
}[] = [
  { name: "Shelter", color: "orange", to: "shelter" },
  { name: "Addiction", color: "amber", to: "addiction" },
  { name: "Food and Materials", color: "emerald", to: "material" },
  { name: "Housing", color: "cyan", to: "housing" },
  { name: "Support Groups", color: "violet", to: "supportGroups" },
  { name: "Mental Health", color: "fuchsia", to: "mentalHealth" },
];

const CategoriesList = (props: Props) => {
  return (
    <div className="w-full">
      {categoriesArray.map((category) => (
        <CategoryListItem
          themeColor={category.color}
          key={category.name}
          categoryName={category.name}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
