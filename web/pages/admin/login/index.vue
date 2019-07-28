<template>
  <div>
    <v-card
      class="mx-auto pa-2"
      max-width="344"
    >
      <h3>Login</h3>
      <div>
        <v-text-field v-model="formData.userName" placeholder="Username..." />
        <v-text-field v-model="formData.password" type="password" placeholder="Password" />
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn>
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    formData: {}
  })
}
</script>
