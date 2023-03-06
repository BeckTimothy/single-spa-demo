import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@Demo/react",
  app: () => System.import("@Demo/react"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@Demo/vue",
  app: () => System.import("@Demo/vue"),
  activeWhen: ["/vue"],
});

start({
  urlRerouteOnly: true,
});
