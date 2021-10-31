Component({
  mixins: [],
  data: {
    solo: false,
    together: false,
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    formSubmit: function(e) {
      console.log("Submit values are: ", e.detail.value)
    }
  },
});
