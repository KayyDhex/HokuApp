Component({
  mixins: [],
  data: {},
  props: {
    mode: "mode",
    modeImg: "mode-img",
    onTap: null,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e) {
      const { onTap } = this.props
      onTap && onTap(e)
    },
  },
});