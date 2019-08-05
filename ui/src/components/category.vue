<template>
  <div class="category">
    <v-list-group no-action value="true">
      <template v-slot:activator>
        <div class="card-header">{{categoryInfo.name}}</div>
      </template>

      <div link class="card-body">
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
    </v-list-group>
  </div>
</template>

<script>
export default {
  name: 'category',
  props: {
    categoryInfo: {
      type: Object,
      required: true
    }
  }
};
</script>
