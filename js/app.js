const { createApp, ref, getCurrentInstance } = Vue;
const widthVal = window.innerWidth;

const App = createApp({
  setup() {
    const player = ref(false);
    const isActive = ref(false);
    const botTree = ref("");
    const botRiver = ref("");
    const svgList = [
      { id: "trees", source: "img/trees.svg", style: "bottom: -130%" },
      { id: "mountrive", source: "img/mountrive.svg", style: "bottom: -130%" },
      { id: "moon", source: "img/moon.png", style: "top: -100%" },
      { id: "stars", source: "img/stars.png", style: "" },
    ];

    const animation = () => {
      player.value = !player.value;
      widthVal >= 1000 ? ((botTree.value = "-20%"), (botRiver.value = "-17.5%")) : ((botTree.value = "-5%"), (botRiver.value = "-2.5%"));
      if (player.value) {
        isActive.value = true;
        showAnimation(botTree.value, botRiver.value);
        setTimeout(() => {
          isActive.value = false;
        }, 3000);
      } else {
        isActive.value = true;
        hideAnimation();
        setTimeout(() => {
          isActive.value = false;
        }, 3000);
      }
    };

    const showAnimation = (botTree, botRiver) => {
      anime
        .timeline()
        .add({
          targets: "#trees",
          bottom: botTree,
          duration: 1000,
          easing: "easeInOutSine",
        })
        .add({
          targets: "#mountrive",
          bottom: botRiver,
          duration: 1000,
          easing: "easeInOutSine",
        })
        .add({
          targets: "#moon",
          top: "0%",
          duration: 1000,
          easing: "easeInOutSine",
        });
    };

    const hideAnimation = () => {
      anime
        .timeline()
        .add({
          targets: "#moon",
          top: "-100%",
          duration: 1000,
          easing: "easeInOutSine",
        })
        .add({
          targets: "#mountrive",
          bottom: "-130%",
          duration: 1000,
          easing: "easeInOutSine",
        })
        .add({
          targets: "#trees",
          bottom: "-130%",
          duration: 1000,
          easing: "easeInOutSine",
        });
    };

    return { svgList, player, animation, isActive };
  },
});

App.mount("#app");
