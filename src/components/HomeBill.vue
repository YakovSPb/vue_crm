<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur of cyrrencies" :key="cur" class="currency-line">
          <span>
            {{ currencyFilter(getCurrency(cur), cur) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import currencyFilter from "../utils/currencyFilter";
export default {
  setup() {
    return { currencyFilter };
  },
  props: ["rates"],
  data: () => ({
    cyrrencies: ["RUB", "USD", "EUR"],
  }),
  computed: {
    base() {
      return (
        this.$store.getters.info.bill / (this.rates["RUB"] / this.rates["EUR"])
      );
    },
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency]);
    },
  },
};
</script>
