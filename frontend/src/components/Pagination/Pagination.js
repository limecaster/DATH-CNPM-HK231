import React from 'react';
import Button from '@mui/material/Button';

const Pagination = ({ currentPage, totalPages, onPageChange, onPreviousPage, onNextPage }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            <Button
                variant="outlined"
                color="success"
                style={{ marginRight: '10px' }}
                onClick={onPreviousPage}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            {pageNumbers.map((number) => (
                <Button
                    key={number}
                    variant={number === currentPage ? 'contained' : 'outlined'}
                    color="success"
                    style={{ marginRight: '10px' }}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </Button>
            ))}
            <Button
                variant="outlined"
                color="success"
                onClick={onNextPage}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;