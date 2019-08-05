<template>
  <div class="left-content">
      <div class="row">
        <div class="col-10">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
          </form>
        </div>
        <div class="col-2">
          <button class="btn btn-primary">
            Đăng tin nhanh
          </button>
        </div>
      </div>

      <router-view/>
</div>
</template>
