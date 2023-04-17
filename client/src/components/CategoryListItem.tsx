import { FC } from "react";
import { twThemeColors } from "../assets/twThemeColors";
import { ColorTypes } from "../types/colorTypes";

type Props = { themeColor: ColorTypes; categoryName: string };

const CategoryListItem: FC<Props> = ({ themeColor, categoryName }) => {
  return (
    // <div
    //   className={`w-full bg-gradient-to-b from-${themeColor}-700 to-${themeColor}-800 flex items-center hover:from-${themeColor}-600 hover:to-${themeColor}-600 cursor-pointer text-slate-50 py-7`}
    // >
    <div
      className={`bg-gradient-to-b ${twThemeColors.bgGradient[themeColor]} text-slate-50 py-7 ${twThemeColors.bgGradientHover[themeColor]} cursor-pointer`}
    >
      {categoryName}
    </div>
  );
};

export default CategoryListItem;
