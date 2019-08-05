<template>
  <div class="home-page">
    <Collabs />

    <div class="row">
      <div class="col-10">
        <Breadcumbs />
      </div>
      <div class="col-2">
        <button class="btn btn-primary">Đăng chủ đề</button>
      </div>
    </div>

    <div class="row">
      <div class="col-9">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >Bài viết mới</a>
            <a
              class="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >Tuyển dụng VIP</a>
            <a
              class="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >Nhà đất VIP</a>
            <a
              class="nav-item nav-link"
              id="nav-newbie-tab"
              data-toggle="tab"
              href="#nav-newbie"
              role="tab"
              aria-controls="nav-newbie"
              aria-selected="false"
            >Thành viên mới</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-7">
                    <a href>1. nav-home-tab Lorem ipsum, dolor sit amet</a>
                  </div>
                  <div class="col-3">Hôm nay lúc 18:22</div>
                  <div class="col-2">
                    <a href>Admin</a>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-7">
                    <a href>2. nav-home-tab Lorem ipsum, dolor sit amet</a>
                  </div>
                  <div class="col-3">Hôm nay lúc 18:22</div>
                  <div class="col-2">
                    <a href>Ahihi</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-7">
                    <a href>1. nav-profile-tab Lorem ipsum, dolor sit amet</a>
                  </div>
                  <div class="col-3">Hôm nay lúc 18:22</div>
                  <div class="col-2">
                    <a href>Admin</a>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-7">
                    <a href>2. nav-profile-tab Lorem ipsum, dolor sit amet</a>
                  </div>
                  <div class="col-3">Hôm nay lúc 18:22</div>
                  <div class="col-2">
                    <a href>Ahihi</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-7">
                    <a href>1. nav-contact-tab Lorem ipsum, dolor sit amet</a>
                  </div>
                  <div class="col-3">Hôm nay lúc 18:22</div>
                  <div class="col-2">
                    <a href>Admin</a>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-7">
                    <a href>2. nav-contact-tab Lorem ipsum, dolor sit amet</a>
                  </div>
                  <div class="col-3">Hôm nay lúc 18:22</div>
                  <div class="col-2">
                    <a href>Ahihi</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="nav-newbie"
            role="tabpanel"
            aria-labelledby="nav-newbie-tab"
          >
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <a href>1. nav-newbie-tab John Nathan</a>
                  </div>
                  <div class="col-4">Tham gia ngày: 23 phút trước</div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <a href>2. nav-newbie-tab John Nathan</a>
                  </div>
                  <div class="col-4">Tham gia ngày: Hôm nay lúc 18:33</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-3">
        <h6>Hãy Like &amp; Share Fanpage</h6>
        <img class="img-fluid" src="https://via.placeholder.com/150x100" alt />
      </div>
    </div>

    <Collabs />

    <Category v-for="(category, index) in categories" :key="`category-${index}`" :categoryInfo="category" />
  </div>
</template>

<script src="./Home.js" />
