"use client";

import { useState } from "react";
import NewsHeader from "./components/NewsHeader";
import NewsCard, { type NewsItem } from "./components/NewsCard";
import NewsPagination from "./components/NewsPagination";

const ITEMS_PER_PAGE = 6;

const allNews: NewsItem[] = [
  {
    id: 1,
    title: "Is qui con ressim vero et elitemqui rem.",
    date: "01/12/2028",
    description:
      "Pitibus et quae exere volectur, od explabore suntis volor aped quos et labore a delit re, sint etur? Net ut mint mos dolest, exeruntus. Ucilit, consequam fugitatur, quibus, cuptatus veniendit,",
  },
  {
    id: 2,
    title: "El ipsaper ferita nobit quam niscides",
    date: "01/12/2028",
    description:
      "Природни дестилати, сокови и сирупи, настали од пажљиво бираног воћа и традиционалних рецептура.Ernatiam verovid quid que as quist, cor sunda volut",
  },
  {
    id: 3,
    title: "Paribusant, natem venet de parum",
    date: "01/12/2028",
    description:
      "Simint odit vendam fuga. Gita sit laciasit labori consendae nate veris velestrum id eatem facestis pre consequat et hil magniminum eatАСДАСДur aut ad modi acea",
  },
  {
    id: 4,
    title: "Is qui con ressim vero et elitemqui rem.",
    date: "01/12/2028",
    description:
      "Pitibus et quae exere volectur, od explabore suntis volor aped quos et labore a delit re, sint etur? Net ut mint mos dolest, exeruntus. Ucilit, consequam fugitatur, quibus, cuptatus veniendit,",
  },
  {
    id: 5,
    title: "El ipsaper ferita nobit quam niscides",
    date: "01/12/2028",
    description:
      "Природни дестилати, сокови и сирупи, настали од пажљиво бираног воћа и традиционалних рецептура.Ernatiam verovid quid que as quist, cor sunda volut",
  },
  {
    id: 6,
    title: "Paribusant, natem venet de parum",
    date: "01/12/2028",
    description:
      "Simint odit vendam fuga. Gita sit laciasit labori consendae nate veris velestrum id eatem facestis pre consequat et hil magniminum eatАСДАСДur aut ad modi acea",
  },
  {
    id: 7,
    title: "Is qui con ressim vero et elitemqui rem.",
    date: "01/12/2028",
    description:
      "Pitibus et quae exere volectur, od explabore suntis volor aped quos et labore a delit re, sint etur? Net ut mint mos dolest, exeruntus. Ucilit, consequam fugitatur, quibus, cuptatus veniendit,",
  },
  {
    id: 8,
    title: "El ipsaper ferita nobit quam niscides",
    date: "01/12/2028",
    description:
      "Природни дестилати, сокови и сирупи, настали од пажљиво бираног воћа и традиционалних рецептура.Ernatiam verovid quid que as quist, cor sunda volut",
  },
  {
    id: 9,
    title: "Paribusant, natem venet de parum",
    date: "01/12/2028",
    description:
      "Simint odit vendam fuga. Gita sit laciasit labori consendae nate veris velestrum id eatem facestis pre consequat et hil magniminum eatАСДАСДur aut ad modi acea",
  },
  {
    id: 10,
    title: "Is qui con ressim vero et elitemqui rem.",
    date: "01/12/2028",
    description:
      "Pitibus et quae exere volectur, od explabore suntis volor aped quos et labore a delit re, sint etur? Net ut mint mos dolest, exeruntus. Ucilit, consequam fugitatur, quibus, cuptatus veniendit,",
  },
  {
    id: 11,
    title: "El ipsaper ferita nobit quam niscides",
    date: "01/12/2028",
    description:
      "Природни дестилати, сокови и сирупи, настали од пажљиво бираног воћа и традиционалних рецептура.Ernatiam verovid quid que as quist, cor sunda volut",
  },
  {
    id: 12,
    title: "Paribusant, natem venet de parum",
    date: "01/12/2028",
    description:
      "Simint odit vendam fuga. Gita sit laciasit labori consendae nate veris velestrum id eatem facestis pre consequat et hil magniminum eatАСДАСДur aut ad modi acea",
  },
];
export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = allNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-34 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <NewsHeader />

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {currentNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
