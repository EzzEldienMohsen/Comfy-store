/* eslint-disable react/prop-types */
import { ProductsList, ProductsGrid } from '../components';
import { useLoaderData } from 'react-router-dom';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import React from 'react';

const ProductsContainer = () => {
  var { meta } = useLoaderData();
  var totalProducts = meta.pagination.total;
  var [layout, setLayout] = React.useState('grid');

  var setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern == layout
        ? 'btn btn-primary text-primary-content'
        : 'btn-btn-ghost text-based-content'
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between border-b border-base-100 items-center pb-5 mt-8">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout('grid')}
            className={setActiveStyle('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout('list')}
            className={setActiveStyle('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      {totalProducts == 0 ? (
        <h5 className="text-2xl mt-16">sorry, there is no products...</h5>
      ) : layout == 'list' ? (
        <ProductsList />
      ) : (
        <ProductsGrid />
      )}
    </>
  );
};

export default ProductsContainer;
