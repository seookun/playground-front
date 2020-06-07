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
          ref="line-chart"
          width="600"
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
      const chartData = [];
      const res = await axios.get('https://api.github.com/repos/seookun/playground-front/stats/punch_card')
        .catch(() => null);

      if (res) {
        const { data } = res;
        for (let i = 0; i < 7; i += 1) {
          chartData.push(data.splice(0, 24).reduce((sum, x) => sum + x[2], 0));
        }
      }

      this.$refs['line-chart'].renderChart({
        labels: ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Commits',
            borderColor: '#1976D2',
            fill: false,
            data: chartData,
          },
        ],
      });
    },
  },
};
</script>
