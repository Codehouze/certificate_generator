<template>
    <div class="certificate-template">
      <canvas ref="certificateCanvas" width="600" height="400"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      data: Object,
    },
    mounted() {
      this.drawCertificate();
    },
    methods: {
      drawCertificate() {
        const canvas = this.$refs.certificateCanvas;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.font = '18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.data.title, canvas.width / 2, 100);
        ctx.font = '16px Arial';
        ctx.fillText(`Awarded to: ${this.data.name}`, canvas.width / 2, 200);
      }
    },
    watch: {
      data: {
        handler() {
          this.drawCertificate();
        },
        deep: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .certificate-template {
    border: 2px solid #333;
    padding: 20px;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  