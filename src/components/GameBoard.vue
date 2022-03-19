<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem
          :preview="preview"
          v-for="field in fields"
          :field="field"
          :key="'item-' + field.id"
      />
    </div>
    <p class="level">Level: <strong>{{ level }}</strong></p>
    <button
        class="btn"
        @click="start"
    >
      Play
    </button>
  </div>
</template>

<script>
import BoardItem from "@/components/BoardItem";
import useGameInit from "@/components/composables/useGameInit";
import useGameStart from "@/components/composables/useGameStart";

export default {
  name: 'GameBoard',
  components: {
    BoardItem
  },
  setup() {
    const number = 25;
    const {level, fields, init} = useGameInit(number);
    const {start, preview} = useGameStart(init, fields, level, number);
    return {
      number,
      level,
      fields,
      init,
      start,
      preview
    }
  }
}
</script>

<style scoped>
.board-wrapper {
  margin-bottom: 100px;
}

.board {
  width: 300px;
  background: #eee;
  margin: 0 auto;
}

.btn {
  background: #3FB883;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 30px;
  margin: 10px 0;
  cursor: pointer;
  outline: none;
}

.btn:hover {
  background: rgba(63, 184, 131, 0.85);

}
</style>