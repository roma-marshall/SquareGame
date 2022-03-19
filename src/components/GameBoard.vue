<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem
          :game-status="gameStatus"
          v-for="field in fields"
          :field="field"
          :key="'item-' + field.id"
          @selectField="selectField($event)"
      />
    </div>
    <p class="level">Level: <strong>{{ level }}</strong></p>
    <button
        class="btn"
        @click="start"
        :disabled="!isStarted"
    >
      Play
    </button>
  </div>
</template>

<script>
import BoardItem from "@/components/BoardItem";
import useGameInit from "@/components/composables/useGameInit";
import useGameStart from "@/components/composables/useGameStart";
import useGameProcess from "@/components/composables/useGameProcess";
import {ref} from "vue";
import {GAME_STATUS} from "@/constants";

export default {
  name: 'GameBoard',
  components: {
    BoardItem
  },
  setup() {
    const number = 25;
    const gameStatus = ref(GAME_STATUS.NONE);
    const {level, fields, init} = useGameInit(number);
    const {start, isStarted} = useGameStart(init, fields, level, number, gameStatus);
    const {selectField} = useGameProcess(fields, gameStatus, level);
    return {
      number,
      level,
      fields,
      init,
      start,
      gameStatus,
      isStarted,
      selectField
    }
  }
}
</script>

<style scoped>
.board-wrapper {
  margin-bottom: 80px;
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

.btn:disabled {
  opacity: 0.5;
}
</style>