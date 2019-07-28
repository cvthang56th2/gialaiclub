<template>
  <v-app>
    <div v-if="loadingPage" class="loading-page">
      <v-progress-circular :size="50" color="primary" indeterminate />
    </div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <v-breadcrumbs :items="breadcumbItems">
          <template v-slot:divider>
            <v-icon>chevron_right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-layout>
          <v-flex xs9>
            <v-tabs
              centered
              color="cyan"
              dark
              icons-and-text
            >
              <v-tabs-slider color="yellow" />

              <v-tab href="#tab-1">
                Recents
                <v-icon>phone</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Favorites
                <v-icon>favorite</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Nearby
                <v-icon>account_box</v-icon>
              </v-tab>

              <v-tab-item
                v-for="i in 3"
                :key="i"
                :value="'tab-' + i"
              >
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>

            <nuxt />
          </v-flex>
          <v-flex xs3>
            list right
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
    <notifications group="success" position="bottom right" />
  </v-app>
</template>

<script src="./default.js" />

<style lang="scss">
.loading-page {
  width: 100vw;
  height: 100vh;
  position: absolute
}
</style>
