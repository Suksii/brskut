interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function NewsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: NewsPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors cursor-pointer ${
            currentPage === page
              ? "bg-text-primary text-white"
              : "text-text-primary hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
