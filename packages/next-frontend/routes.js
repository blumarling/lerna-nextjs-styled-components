const routes = require("next-routes")()


routes.add({
  name: "Home",
  pattern: "",
  page: "index",
})


module.exports = routes