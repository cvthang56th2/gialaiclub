<template>
  <div class="collabs">
    <v-list-group no-action value="true">
      <template v-slot:activator>
        <div class="card-header">Đối tác - liên kết</div>
      </template>

      <div link class="card-body">
        <div class="row">
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
          <div class="col-4">
            <a href="https://via.placeholder.com/150">
              <img class="img-fluid" src="https://via.placeholder.com/300x100" alt />
            </a>
          </div>
        </div>
      </div>
    </v-list-group>
  </div>
</template>

<script>
export default {
  name: "collabs",
  props: {
    index: {
      type: String
    }
  }
};
</script>
