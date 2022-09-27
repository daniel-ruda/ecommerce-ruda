import ItemListContainer from "./../components/modules/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./../components/modules/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/modules/Cart/Cart";

const ApplicationRoutes = {
  Routes: [
    {
      path: "/",
      component: <ItemListContainer />,
      key: "login",
    },
    {
      path: "item/:id",
      component: <ItemDetailContainer />,
      key: "item",
    },
    {
      path: "category/:categoryId",
      component: <ItemListContainer />,
      key: "category",
    },
    {
      path: "cart",
      component: <Cart />,
      key: "cart",
    },
  ],
};

export default ApplicationRoutes;
