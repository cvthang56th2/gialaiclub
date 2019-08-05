<template>
  <div class="home-page">
    <Collabs index="0" />

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

    <Collabs index="1" />

    <div class="accordion" id="accordionGroup0">
      <div class="card">
        <div class="card-header" id="headingOneGroup0">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup0"
              aria-expanded="true"
              aria-controls="collapseOneGroup0"
            >Thông báo - Hướng dẫn</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup0"
          class="collapse show"
          aria-labelledby="headingOneGroup0"
          data-parent="#accordionGroup0"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup1">
      <div class="card">
        <div class="card-header" id="headingOneGroup1">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup1"
              aria-expanded="true"
              aria-controls="collapseOneGroup1"
            >Tổng quan tỉnh Gia Lai</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup1"
          class="collapse show"
          aria-labelledby="headingOneGroup1"
          data-parent="#accordionGroup1"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup2">
      <div class="card">
        <div class="card-header" id="headingOneGroup2">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup2"
              aria-expanded="true"
              aria-controls="collapseOneGroup2"
            >Hoạt động diễn đàn</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup2"
          class="collapse show"
          aria-labelledby="headingOneGroup2"
          data-parent="#accordionGroup2"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup3">
      <div class="card">
        <div class="card-header" id="headingOneGroup3">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup3"
              aria-expanded="true"
              aria-controls="collapseOneGroup3"
            >Du lịch Gia Lai</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup3"
          class="collapse show"
          aria-labelledby="headingOneGroup3"
          data-parent="#accordionGroup3"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup4">
      <div class="card">
        <div class="card-header" id="headingOneGroup4">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup4"
              aria-expanded="true"
              aria-controls="collapseOneGroup4"
            >Mua bán và Rao vặt trực tuyến</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup4"
          class="collapse show"
          aria-labelledby="headingOneGroup4"
          data-parent="#accordionGroup4"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup5">
      <div class="card">
        <div class="card-header" id="headingOneGroup5">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup5"
              aria-expanded="true"
              aria-controls="collapseOneGroup5"
            >Tuyển dụng việc làm - Tuyển sinh</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup5"
          class="collapse show"
          aria-labelledby="headingOneGroup5"
          data-parent="#accordionGroup5"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup6">
      <div class="card">
        <div class="card-header" id="headingOneGroup6">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup6"
              aria-expanded="true"
              aria-controls="collapseOneGroup6"
            >Tìm kiếm - Giới thiệu dịch vụ</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup6"
          class="collapse show"
          aria-labelledby="headingOneGroup6"
          data-parent="#accordionGroup6"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup7">
      <div class="card">
        <div class="card-header" id="headingOneGroup7">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup7"
              aria-expanded="true"
              aria-controls="collapseOneGroup7"
            >Thế giới công nghệ</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup7"
          class="collapse show"
          aria-labelledby="headingOneGroup7"
          data-parent="#accordionGroup7"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup8">
      <div class="card">
        <div class="card-header" id="headingOneGroup8">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup8"
              aria-expanded="true"
              aria-controls="collapseOneGroup8"
            >Nhịp điệu cuộc sống</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup8"
          class="collapse show"
          aria-labelledby="headingOneGroup8"
          data-parent="#accordionGroup8"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion" id="accordionGroup9">
      <div class="card">
        <div class="card-header" id="headingOneGroup9">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOneGroup9"
              aria-expanded="true"
              aria-controls="collapseOneGroup9"
            >Chuyên đề tổng hợp</button>
          </h2>
        </div>

        <div
          id="collapseOneGroup9"
          class="collapse show"
          aria-labelledby="headingOneGroup9"
          data-parent="#accordionGroup9"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>Title</div>
                    <div>Desc</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-8">
                    <div>THÔNG BÁO TỪ DIỄN ĐÀN</div>
                    <div>Những thông báo chính thức của Diễn đàn</div>
                    <div>Đề tài thảo luận: 77 Bài viết: 334</div>
                  </div>
                  <div class="col-4">
                    Mới nhất: Nội Quy Diễn Đàn NhaTrangClub
                    Security, 12/2/19
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcumbs from '@/components/breadcumbs.vue'
import Collabs from '@/components/collabs.vue'

export default {
  name: 'layout-client',

  components: {
    Breadcumbs,
    Collabs,
  }
}

</script>
