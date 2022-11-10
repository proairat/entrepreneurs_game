import { removeObjectProperty } from "./commonFunctions";
export { fakeBackend };

// array in local storage for registered users
const usersKey = "regUser";
let users = JSON.parse(localStorage.getItem(usersKey)) || [];

function fakeBackend() {
  const realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 1000);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/users/authenticate") && opts.method === "POST":
            return authenticate();
          case url.endsWith("/users/register") && opts.method === "POST":
            return register();
          case url.endsWith("/users") && opts.method === "GET":
            return getUsers();
          case url.match(/\/users\/\d+$/) && opts.method === "GET":
            return getUserById();
          case url.match(/\/users\/\d+$/) && opts.method === "PUT":
            return updateUser();
          case url.match(/\/users\/\d+$/) && opts.method === "DELETE":
            return deleteUser();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // route functions

      function authenticate() {
        const { login, password } = body();
        const user = users.find(
          (x) => x.login === login && x.password === password
        );

        if (!user) return error("Неверный логин или пароль");

        return ok({
          ...basicDetails(user),
          token: "fake-jwt-token",
        });
      }

      function register() {
        const user = body();

        console.log("fake-backend.js -> register(), user", user);

        if (users.find((x) => x.login === user.login)) {
          return error('Имя пользователя "' + user.login + '" уже занято');
        }

        user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem(usersKey, JSON.stringify(users));
        return ok();
      }

      function getUsers() {
        if (!isAuthenticated()) return unauthorized();
        return ok(users.map((x) => basicDetails(x)));
      }

      function getUserById() {
        if (!isAuthenticated()) return unauthorized();

        const user = users.find((x) => x.id === idFromUrl());
        return ok(basicDetails(user));
      }

      function updateUser() {
        if (!isAuthenticated()) return unauthorized();

        const params = body();
        const user = users.find((x) => x.id === idFromUrl());

        // only update password if entered
        if (!params.password) {
          delete params.password;
        }

        // if login changed check if taken
        if (
          params.login !== user.login &&
          users.find((x) => x.login === params.login)
        ) {
          return error('Имя пользователя "' + params.login + '" уже занято');
        }

        // update and save user
        Object.assign(user, params);
        localStorage.setItem(usersKey, JSON.stringify(users));

        return ok();
      }

      function deleteUser() {
        if (!isAuthenticated()) return unauthorized();

        users = users.filter((x) => x.id !== idFromUrl());
        localStorage.setItem(usersKey, JSON.stringify(users));
        return ok();
      }

      // helper functions

      function ok(body) {
        resolve({ ok: true, ...headers(), json: () => Promise.resolve(body) });
      }

      function unauthorized() {
        resolve({
          status: 401,
          ...headers(),
          json: () => Promise.resolve({ message: "Не авторизован" }),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          ...headers(),
          json: () => Promise.resolve({ message }),
        });
      }

      function basicDetails(user) {
        return removeObjectProperty("password")(user);
      }

      function isAuthenticated() {
        return opts.headers["Authorization"] === "Bearer fake-jwt-token";
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }

      function idFromUrl() {
        const urlParts = url.split("/");
        return parseInt(urlParts[urlParts.length - 1]);
      }

      function headers() {
        return {
          headers: {
            get(key) {
              console.log("Call headers -> key", key);
              return ["application/json"];
            },
          },
        };
      }
    });
  };
}
