import { classNames } from "@/shared/lib/classNames";
import { UiButton } from "../ui-button";
import css from "./ui-pagination.module.css";

type UiPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export const UiPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: UiPaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={classNames(css.pagination, {}, [className])}>
      <UiButton
        variant="secondary"
        // className={css.navButton}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </UiButton>

      {pages.map((page) => (
        <UiButton
          key={page}
          variant={page === currentPage ? "primary" : "secondary"}
          // className={classNames(css.pageButton, { [css.active]: page === currentPage })}
          onClick={() => onPageChange(page)}
        >
          {page}
        </UiButton>
      ))}

      <UiButton
        variant="secondary"
        // className={css.navButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </UiButton>
    </div>
  );
};
