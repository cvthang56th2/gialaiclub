<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Trang chủ
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mua bán rao vặt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chuyên mục dịch vụ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cẩm nang du lịch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ẩm thực</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nhà đất</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tuyển dụng</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tuyển sinh</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Diễn đàn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Thành viên</a>
        </li>
      </ul>
      <button class="btn btn-primary">Tài khoản</button>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'top-nav'
}
</script>
