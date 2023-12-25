/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, redirect } from 'react-router-dom';
import { SectionTitle, OrdersList, PaginationComplexOne } from '../components';
import { autoFetch } from '../utilities';
import { toast } from 'react-toastify';

var ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      autoFetch('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export var loader =
  (store, queryCLient) =>
  async ({ request }) => {
    var user = store.getState().user.user;
    if (!user) {
      toast.warn('you need to login first');
      return redirect('/login');
    }
    var params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      var response = await queryCLient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      var errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error fetching your order';
      toast.error(errorMessage);
      if (error?.response?.status === (401 || 403)) return redirect('/login');
      return null;
    }
  };

const Orders = () => {
  var { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please place an order first" />;
  }
  return (
    <>
      <SectionTitle text="your orders" />
      <OrdersList />
      <PaginationComplexOne />
    </>
  );
};

export default Orders;
