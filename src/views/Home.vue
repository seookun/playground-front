<template>
  <v-container>
    <v-card
      class="mx-auto"
      outlined
      width="700"
    >
      <v-card-title>
        Weekly Commits
      </v-card-title>
      <v-card-text>
        <line-chart
          ref="chart"
          :width="600"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import axios from 'axios';
import LineChart from '@/components/LineChart.vue';

export default {
  name: 'Home',
  components: {
    LineChart,
  },
  data() {
    return {

    };
  },
  created() {
    this.createLineChart();
  },
  methods: {
    async createLineChart() {
      const getFrontData = axios.get('https://api.github.com/repos/seookun/playground-front/stats/punch_card');
      const getBackData = axios.get('https://api.github.com/repos/seookun/playground-back/stats/punch_card');

      const res = await Promise.all([getFrontData, getBackData]);

      if (res) {
        const frontData = res[0].data;
        const backData = res[1].data;
        const frontChartData = [];
        const backChartData = [];

        for (let i = 0; i < 7; i += 1) {
          frontChartData.push(frontData.splice(0, 24).reduce((sum, x) => sum + x[2], 0));
          backChartData.push(backData.splice(0, 24).reduce((sum, x) => sum + x[2], 0));
        }

        this.$refs.chart.renderChart({
          labels: ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              label: 'playground-front',
              borderColor: '#1976D2',
              fill: false,
              data: frontChartData,
            },
            {
              label: 'playground-back',
              borderColor: '#43A047',
              fill: false,
              data: backChartData,
            },
          ],
        });
      }
    },
  },
};
</script>
