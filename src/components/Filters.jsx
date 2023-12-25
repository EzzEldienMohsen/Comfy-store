import { Form, useLoaderData, Link } from 'react-router-dom';
import { FormInput, FormCheckBox, FormSelect, FormRange } from '../components';
const Filters = () => {
  var { meta, params } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md items-center grid px-8 py-4 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        defaultValue={params.search}
        label="search"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        defaultValue={params.category}
        list={meta.categories}
        size="select-sm"
      />

      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        defaultValue={params.company}
        list={meta.companies}
        size="select-sm"
      />

      {/* ORDERS */}
      <FormSelect
        label="sort by"
        name="order"
        defaultValue={params.order}
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange name="price" label="select price" size="range-sm" />

      {/* SHIPPING */}
      <FormCheckBox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={params.shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};

export default Filters;
