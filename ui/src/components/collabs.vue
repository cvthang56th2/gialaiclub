<template>
  <div class="accordion" :id="'accordionCollabs' + index">
    <div class="card">
      <div class="card-header" :id="'headingCollabs' + index">
        <h2 class="mb-0">
          <button
            class="btn btn-link"
            type="button"
            data-toggle="collapse"
            :data-target="'#collapseOneCollabs' + index"
            aria-expanded="true"
            :aria-controls="'collapseOneCollabs' + index"
          >Đối tác - liên kết</button>
        </h2>
      </div>

      <div
        :id="'collapseOneCollabs' + index"
        class="collapse show"
        :aria-labelledby="'headingCollabs' + index"
        :data-parent="'#accordionCollabs' + index"
      >
        <div class="card-body">
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
      </div>
    </div>
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

