<template>
  <span :class="getBoardItemClasses"></span>
</template>

<script>
import {GAME_STATUS, FIELD} from "@/constants";
import {computed} from "vue";

export default {
  name: 'BoardItem',
  props: {
    field: {
      type: Object,
      required: true
    },
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE
    }
  },
  setup(props) {
    const getBoardItemClasses = computed(() => {
      let classes = 'item ';
      if (props.field.value === FIELD.FILLED && props.gameStatus === GAME_STATUS.PREVIEW) {
        classes += 'active';
      }
      return classes
    });
    return {
      getBoardItemClasses
    }
  }
}
</script>

<style scoped>
.item {
  position: relative;
  width: 50px;
  height: 50px;
  background: #ccc;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
  transition: 0.4s;
  transform-style: preserve-3d;
}

.item.active {
  background: #3FB883;
  transform: rotateX(180deg);
}
</style>