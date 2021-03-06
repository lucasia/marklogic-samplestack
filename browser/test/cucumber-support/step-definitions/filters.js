module.exports = function () {
  this.World = World;

  this.Given(
    /clear all filters/,
    function (next) {
      this.currentPage.filters.clearAll()
          .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /filter documents by mine only = "(.*)"/,
    function (setting, next) {
      this.currentPage.filters.mineOnly.setValue(JSON.parse(setting))
          .then(this.notifyOk(next), next);
    }
  );

  this.When(
    /filter documents by resolved only = "(.*)"/,
    function (setting, next) {
      this.currentPage.filters.resolvedOnly.setValue(JSON.parse(setting))
          .then(this.notifyOk(next), next);
    }
  );


  // this.When(
  //   /I select the filter resolved only/,
  //   function (next) {
  //     this.currentPage.addFilter('resolvedOnly').then(next);
  //   }
  // );
  //
  // this.When(
  //   /I unselect the filter mine only/,
  //   function (next) {
  //     this.currentPage.removeFilter('showMineOnly').then(next);
  //   }
  // );
  //
  // this.When(
  //   /I unselect the filter resolved only/,
  //   function (next) {
  //     this.currentPage.removeFilter('resolvedOnly').then(next);
  //   }
  // );
  //

};
