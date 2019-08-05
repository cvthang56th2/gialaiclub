<template>
  <div class="wrap-page-client">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">LOGO</div>
        <div class="col-10">Liên hệ quảng cáo</div>
      </div>
    </div>
    <TopNav />
    <div class="top-breadcumb">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Tìm kiếm diễn đàn</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Bài viết gần đây</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Đăng chủ đề</li>
        </ol>
      </nav>
    </div>
    <div class="wrap-content container-fluid">
      <div class="row">
        <LeftContent class="col-9" />
        <RightContent class="col-3" />
      </div>
    </div>
    <Breadcumbs />
    <PageFooter />
  </div>
</template>

<script src="./layout-client.js" />
