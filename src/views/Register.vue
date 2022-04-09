<template>
  <form class="card auth-card" @submit.prevent="submitHadler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{ invalid: v$.email.$error }"
        />
        <label for="email">Email</label>
        <small
          v-if="v$.email.$dirty && v$.email.required.$invalid"
          class="helper-text invalid"
          >Поле Email не должно быть пустым</small
        >
        <small
          v-else-if="v$.email.$dirty && v$.email.email.$invalid"
          class="helper-text invalid"
          >Введите корректный Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{
            invalid:
              (v$.password.$dirty && v$.password.required.$invalid) ||
              (v$.password.$dirty && v$.password.minLength.$invalid),
          }"
        />
        <label for="password">Пароль</label>
        <small
          v-if="v$.password.$dirty && v$.password.required.$invalid"
          class="helper-text invalid"
          >Пароль не должно быть пустым</small
        >
        <small
          v-else-if="v$.password.$dirty && v$.password.minLength.$invalid"
          class="helper-text invalid"
          >Пароль должен быть
          {{ v$.password.minLength.$params.min }} симвоволов. Сейчас он
          {{ password.length }}</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: v$.name.$error }"
        />
        <label for="name">Имя</label>
        <small
          v-if="v$.name.$dirty && v$.name.required.$invalid"
          class="helper-text invalid"
          >Введите ваше имя</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" 
          v-model="agree"
          />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>


<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

export default {
  name: "register",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      agree: false,
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: { required },
      agree: { checked: (v) => v },
    };
  },
  methods: {
    submitHadler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      console.log(formData);
      this.$router.push("/");
    },
  },
};
</script>