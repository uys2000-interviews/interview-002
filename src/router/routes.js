export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/HomeLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/ListItemView.vue"),
      },
    ],
  },
];
