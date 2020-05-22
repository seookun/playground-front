import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function loadStoreModules() {
  const requires = require.context('./modules', true, /[A-Za-z0-9-_,\s]+\.js$/i);
  const modules = {};
  requires.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const module = matched[1];
      modules[module] = requires(key).default;
    }
  });
  return modules;
}

export default new Vuex.Store({
  modules: loadStoreModules(),
});
