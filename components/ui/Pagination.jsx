import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

export default function Pagination({ pageCount, currentPage, onChange }) {
  return (
    <div className="py-6 mx-auto flex items-center justify-center gap-x-4">
      <Button variant="unstyled">
        <ChevronLeft className="w-5" />
      </Button>
      {[...Array(pageCount).keys()].map((page) => (
        <Button
          variant="unstyled"
          key={page}
          className={page + 1 === currentPage ? "font-bold" : ""}
        >
          {page + 1}
        </Button>
      ))}
      <Button variant="unstyled">
        <ChevronRight className="w-5" />
      </Button>
    </div>
  );
}
