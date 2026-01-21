import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {

    const renderPageNumbers = () => {
        const pages = [];

        // Always show first page
        pages.push(
            <button
                key={1}
                className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
                onClick={() => onPageChange(1)}
            >
                1
            </button>
        );

        // Logic for ellipses and middle pages
        if (totalPages <= 7) {
            // Show all if small number of pages
            for (let i = 2; i < totalPages; i++) {
                pages.push(
                    <button
                        key={i}
                        className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
                        onClick={() => onPageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Ellipsis logic
            if (currentPage <= 4) {
                for (let i = 2; i <= 5; i++) {
                    pages.push(
                        <button
                            key={i}
                            className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
                            onClick={() => onPageChange(i)}
                        >
                            {i}
                        </button>
                    );
                }
                pages.push(<span key="dots-1" className="pagination-dots">...</span>);
            } else if (currentPage >= totalPages - 3) {
                pages.push(<span key="dots-1" className="pagination-dots">...</span>);
                for (let i = totalPages - 4; i < totalPages; i++) {
                    pages.push(
                        <button
                            key={i}
                            className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
                            onClick={() => onPageChange(i)}
                        >
                            {i}
                        </button>
                    );
                }
            } else {
                pages.push(<span key="dots-1" className="pagination-dots">...</span>);
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(
                        <button
                            key={i}
                            className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
                            onClick={() => onPageChange(i)}
                        >
                            {i}
                        </button>
                    );
                }
                pages.push(<span key="dots-2" className="pagination-dots">...</span>);
            }
        }

        // Always show last page if more than 1 page
        if (totalPages > 1) {
            pages.push(
                <button
                    key={totalPages}
                    className={`pagination-btn ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="pagination-container">
            {/* Previous Arrow */}
            <button
                className="pagination-btn arrow-btn"
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12L4 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {renderPageNumbers()}

            {/* Next Arrow */}
            <button
                className="pagination-btn arrow-btn"
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};
