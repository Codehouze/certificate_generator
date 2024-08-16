
// CertificateGeneratorComponent.vue
import CertificateGeneratorComponent from './components/CertificateGeneratorComponent.vue';

const CertificateGeneratorPlugin = {
  install(app, options = {}) {
    // Register the component globally with Vue
    app.component(CertificateGeneratorPlugin, CertificateGeneratorComponent);
  },
};

export default CertificateGeneratorPlugin;
  