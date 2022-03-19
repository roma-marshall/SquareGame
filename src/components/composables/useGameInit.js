import {onBeforeMount, ref} from "vue";

export default function useGameInit(number) {
    let level = ref(3);
    let fields = ref([]);
    const init = () => {
        fields.value = [];
        for (let i = 0; i < number; i++) {
            fields.value.push({
                id: i,
                click: false,
                value: 0
            });
        }
    }
    onBeforeMount(init);
    return {
        level,
        fields,
        init
    }
}