<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="submitHadler">
        <div class="input-field">
          <input
            id="title"
            type="text"
            v-model="title"
            :class="{ invalid: v$.title.error }"
          />
          <label for="title">Название</label>
          <span
            v-if="v$.title.$dirty && v$.title.required.$invalid"
            class="helper-text invalid"
            >Введите название категории</span
          >
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{ invalid: v$.title.error }"
          />
          <label for="limit">Лимит</label>
          <span
            v-if="v$.limit.$dirty && v$.limit.minValue.$invalid"
            class="helper-text invalid"
            >Минимальная значение {{ v$.limit.minValue.$params.min }}</span
          >
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minValue } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    title: "",
    limit: 100,
  }),
  methods: {
    async submitHadler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        title: this.title,
        limit: this.limit,
      };
      try {
        const category = await this.$store.dispatch("createCategory", formData);
        this.title = ''
        this.limit = 100
        this.v$.$reset()
        this.$message('Категория была создана')
        this.$emit('created', category)
      } catch (e) {}
    },
  },
  mounted() {
    M.updateTextFields();
  },
  validations() {
    return {
      title: { required },
      limit: { minValue: minValue(100) },
    };
  },
};
</script>
