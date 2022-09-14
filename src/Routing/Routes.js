import ItemListContainer from "./../components/modules/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./../components/modules/ItemDetailContainer/ItemDetailContainer";

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
  ],
};

export default ApplicationRoutes;