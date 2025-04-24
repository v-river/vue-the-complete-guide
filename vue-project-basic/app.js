function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomValue(5, 12);
      this.attackPlayer();
    },

    attackPlayer() {
      this.playerHealth -= getRandomValue(8, 15);
    },
  },
});

app.mount("#game");
