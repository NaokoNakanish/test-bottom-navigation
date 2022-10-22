<template>
  <Page>
    <MDBottomNavigation class="ArticlesTabs__tabs" selectedIndex="1">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <MDTabStrip class="ArticlesTabs__tab-strip">
        <MDTabStripItem class="ArticlesTabs__tab-strip-item">
          <Label class="ArticlesTabs__tab-strip-item-text" text="Home"></Label>
        </MDTabStripItem>
        <MDTabStripItem class="ArticlesTabs__tab-strip-item">
          <Label
            class="ArticlesTabs__tab-strip-item-text"
            text="Account"
          ></Label>
        </MDTabStripItem>
        <MDTabStripItem class="ArticlesTabs__tab-strip-item">
          <Label
            class="ArticlesTabs__tab-strip-item-text"
            text="Search"
          ></Label>
        </MDTabStripItem>
      </MDTabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <MDTabContentItem>
        <GridLayout>
          <Label text="Home Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <StackLayout>
          <Label :text="msg_before" class="h1 text-center"></Label>
          <Label :text="msg_after" class="h1 text-center"></Label>
        </StackLayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
    </MDBottomNavigation>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      msg_before: "Hello World!",
      msg_after: "Hello World!",
    };
  },
  mounted() {
    const appSettings = require("@nativescript/core/application-settings");
    this.hits = appSettings.getString("hits");
    console.log("this.hits:", this.hits);
    if (!this.hits) this.hits = "hello";
    this.msg_before = this.hits;
    appSettings.setString("hits", "hellohello");
    console.log("this.hits", this.hits);
    this.msg_after = this.hits;
  },
};
</script>

<style lang="scss">
.ArticlesTabs {
  &__tabs {
    margin: 300 0 0;
    // background-color: red;　// 全面にあたる
  }
  &__tab-strip {
    // add since N8
    highlight-color: green; // 効く
    // color: blue; //  効くが、常に全てに効く、ハイライトの色にはならなくなる
    iostabbaritemsalignment: center;
    // font-size: 20; // 効く
    // text-transform: uppercase; // 効かない
    // background-color: red; // 効かない
  }
  &__tab-strip-item {
    background-color: #161a21; // 効く。赤だとハイライト以外の文字を塗りつぶすが、グレーや黒だと塗りつぶさない（）
    // highlight-color: green; // 効かない
  }
  &__tab-strip-item-text {
    // highlight-color: green; // 効かない
    // background-color: red; // 効かない
    // color: red; // 効くが、常に全てに効く、ハイライトの色にはならなくなる
    letter-spacing: 10px; // 効かない
    font-size: 20; // 効く
    text-transform: uppercase; // 効く
  }
}
</style>
