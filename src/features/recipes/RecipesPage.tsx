"use client";

import RecipeCard, { type RecipeItem } from "./components/RecipeCard";
import FeaturedSection, {
  type FeaturedItem,
} from "./components/FeaturedSection";

const recipes: RecipeItem[] = [
  {
    id: 1,
    title: "Рецепт 1",
    description:
      "Assinis dicipsant am que perum res ex et faccaecto bea vollab in et re cus doluptatus. Usda nime cus sitem fugitas eserspe dipidi",
  },
  {
    id: 2,
    title: "Рецепт 2",
    description:
      "Cusciet reium essin pratio doluptatia il iminihi ciatem quo blanditi sus sinvelias vendenet laut quod utaspernam as eum",
  },
  {
    id: 3,
    title: "Рецепт 3",
    description:
      "Icilis exces eaqui ut prero te ma as sunt quaest voluptaque mossedis et labo. Atiumquibus rent qui abore num voluptatur i",
  },
  {
    id: 4,
    title: "Рецепт 4",
    description:
      "Eperrum audi to quia volum quibus re de into eatum et que est, nos veliqui ommodi officabores alis aut expe velice cullant lit",
  },
];

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "Necea nobis ma dollaboris maxim",
    subtitle: "Iquiate nos numqui testio consed",
    description:
      "Ut quos ma sincipi delique nullabo. Bernate ssequi ut hari ditatius ne quas essequi quas sam facearchit adis sam quis rest est eictur, vellacid eumquatio ma nimus quatur? Quidem quae eossumquae erero occullaut ra dolo te od quam, nihit ant, suntur, asit facea nonsedit",
  },
  {
    id: 2,
    title: "Традиционални рецепти",
    subtitle: "Укуси наше традиције",
    description:
      "Откријте богатство традиционалних рецепата који се преносе са генерације на генерацију. Наши мајстори куварства комбинују традицију са модерним приступом.",
  },
];

export default function RecipesPage() {
  return (
    <div className="pt-34">
      {/* First Section - Recipes Grid */}
      <div className="relative">
        {/* Secondary background - stops at gold line level */}
        <div className="absolute inset-0 bg-secondary bottom-[42%]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-light text-text-primary mb-4">
              Beaqui inusaes earias invelitiones
            </h1>
            <p className="text-text-primary max-w-3xl mx-auto">
              Uptis voluptia voloreribus, eosae ilibus nim quassit, tem reces
              eum quaes re ipic tem ipsantium rehendis cus,
            </p>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipes.map((item) => (
              <RecipeCard key={item.id} item={item} />
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 border border-text-primary text-text-primary text-sm font-medium hover:bg-text-primary hover:text-white transition-colors cursor-pointer">
              Погледај све рецепте
            </button>
          </div>
        </div>
      </div>

      {/* Second Section Header - white/primary background */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-light text-text-primary mb-4">
              Beaqui inusaes earias invelitiones
            </h2>
            <p className="text-text-primary max-w-3xl mx-auto">
              Uptis voluptia voloreribus, eosae ilibus nim quassit, tem reces
              eum quaes re ipic tem ipsantium rehendis cus,
            </p>
          </div>
        </div>

        {/* Featured Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <FeaturedSection items={featuredItems} />
        </div>
      </div>
    </div>
  );
}
