<template>
    <div class="certificate-generator">
      <h2>Certificate Generator</h2>
      <form @submit.prevent="generateCertificate">
        <div>
          <label for="name">Student Name:</label>
          <input v-model="formData.name" type="text" id="name" required />
        </div>
        <div>
          <label for="course">Course Title:</label>
          <input v-model="formData.title" type="text" id="course" required />
        </div>
        <CertificateTemplate :data="formData" />
        <button type="submit">Generate Certificate</button>
      </form>
    </div>
  </template>
  
  <script>
import CertificateTemplate from './CertificateTemplate.vue';

export default {
  components: {
    CertificateTemplate,
  },
  data() {
    return {
      formData: {
        name: '',
        title: '',
      },
    };
  },
  methods: {
    generateCertificate() {
      // Placeholder for actual generation logic, e.g., sending data to a server
      console.log("Generating certificate for:", this.formData);
      // Trigger canvas update if not using Vue reactivity
      this.$refs.certificateTemplate.drawCertificate();
    },
  },
};
</script>

  
  <style scoped>
  /* Add your component styles here */
  </style>