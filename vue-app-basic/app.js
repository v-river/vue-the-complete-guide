function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: "",
      logs: [],
    };
  },

  computed: {
    monsterBarStyles() {
      const width = this.monsterHealth < 0 ? 0 : this.monsterHealth;
      return { width: `${width}%` };
    },

    playerBarStyles() {
      const width = this.playerHealth < 0 ? 0 : this.playerHealth;
      return { width: `${width}%` };
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3;
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },

  methods: {
    attackPlayer() {
      const value = getRandomValue(8, 15);
      this.playerHealth -= value;
      this.addLogMessage("monster", "attack", value);
    },

    attackMonster() {
      this.currentRound++;
      const value = getRandomValue(5, 12);
      this.monsterHealth -= value;
      this.addLogMessage("player", "attack", value);
      this.attackPlayer();
    },

    specialAttackMonster() {
      this.currentRound++;
      const value = getRandomValue(10, 25);
      this.monsterHealth -= value;
      this.addLogMessage("player", "attack", value);
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const value = getRandomValue(8, 20);
      if (this.playerHealth + value > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += value;
      }
      this.addLogMessage("player", "heal", value);
      this.attackPlayer();
    },

    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = "";
      this.logs = [];
    },

    surrender() {
      this.winner = "monster";
    },

    addLogMessage(performer, action, value) {
      this.logs.unshift({ performer, action, value });
    },
  },
});

app.mount("#game");
