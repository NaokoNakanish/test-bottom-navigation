<template>
  <Page>
    <MDBottomNavigation selectedIndex="1">
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <MDTabStrip>
        <MDTabStripItem>
          <Label text="Home"></Label>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="Account"></Label>
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="Search"></Label>
        </MDTabStripItem>
      </MDTabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <MDTabContentItem>
        <GridLayout>
          <Label text="Home Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <GridLayout>
          <Label text="Account Page" class="h2 text-center"></Label>
        </GridLayout>
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
      msg: "Hello World!",
    };
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
