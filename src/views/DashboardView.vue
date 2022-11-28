<template>
  <div class="h-screen bg-slate-200">
    <h1 class="text-center">Dashboard page</h1>
    <h5>Test Value: {{ calcTestValue }}</h5>
    <ul>
      <li v-for="(item, idx) in 200" :key="idx">Item: {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    calcTestValue() {
      return this.test_value * 100 || "Loading...";
    },
  },
  data() {
    return {
      hook: {
        BEFORE_CREATED: "BEFORE_CREATED",
        CREATED: "CREATED",
        BEFORE_MOUNT: "BEFORE_MOUNT",
        MOUNTED: "MOUNTED",
        BEFORE_DESTROY: "BEFORE_DESTROY",
        DESTROYED: "DESTROYED",
      },
      test_value: 0,
      startTime: 0,
      endTime: 0,
      startTimeMounted: 0,
      endTimeMounted: 0,
    };
  },
  methods: {
    callApi(hook, time) {
      return new Promise(() =>
        setTimeout(() => {
          let endTime = new Date().getTime();
          let totalTime;
          switch (hook) {
            case this.hook.BEFORE_CREATED:
              this.test_value = 1;
              break;
            case this.hook.CREATED:
              this.test_value = 2;
              totalTime = endTime - this.startTime;
              console.log("CREATED start =", this.startTime, "end =", endTime);
              break;
            case this.hook.BEFORE_MOUNT:
              this.test_value = 3;
              break;
            case this.hook.MOUNTED:
              this.test_value = 4;
              totalTime = endTime - this.startTimeMounted;
              console.log(
                "MOUNTED start =",
                this.startTimeMounted,
                "end =",
                endTime
              );
              break;
            case this.hook.BEFORE_DESTROY:
              this.test_value = 5;
              break;
            case this.hook.DESTROYED:
              this.test_value = 6;
              break;
          }
          console.log(
            hook,
            "is running in ",
            time,
            "s, total time excute = ",
            totalTime
          );
        }, time)
      );
    },
  },
  beforeCreate() {
    console.log("beforeCreate is running ....");
    // this.callApi(this.hook.BEFORE_CREATED, 5000);
  },
  created() {
    console.log("created is running ....");
    this.startTime = new Date().getTime();
    this.callApi(this.hook.CREATED, 5000);
  },
  beforeMount() {
    console.log("beforeMount is running ....");
    // this.callApi(this.hook.BEFORE_MOUNT, 5000);
  },
  mounted() {
    console.log("mounted is running ....");
    this.startTimeMounted = new Date().getTime();
    this.callApi(this.hook.MOUNTED, 5000);
  },
  beforeDestroy() {
    console.log("beforeDestroy is running ....");
    // this.callApi(this.hook.BEFORE_DESTROY, 5000);
  },
  destroyed() {
    console.log("destroyed is running ....");
    // this.callApi(this.hook.DESTROYED, 5000);
  },
};
</script>
