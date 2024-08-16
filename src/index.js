
// MyAwesomePluginComponent.vue
import MyAwesomePluginComponent from './components/MyAwesomePluginComponent.vue';

const MyAwesomePluginPlugin = {
  install(app, options = {}) {
    // Register the component globally with Vue
    app.component(MyAwesomePluginPlugin, MyAwesomePluginComponent);
  },
};

export default MyAwesomePluginPlugin;
  