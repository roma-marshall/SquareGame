import {DEFAULT_LEVEL, FIELD, GAME_STATUS} from "@/constants";

export default function useGameProcess(fields, gameStatus, level) {
    const selectField = (id) => {
        const index = fields.value.findIndex((field) => {
            return field.id === id;
        })
        if (index > -1 && !fields.value[index].clicked) {
            fields.value[index].clicked = true;
            checkGame();
        }
    };
    const checkGame = () => {
        const errorIndex = fields.value.findIndex(field => {
            return field.clicked && f ield.value === FIELD.EMPTY;
        });
        if (errorIndex > -1) {
            setGameOver();
        }
        const notFoundItemIndex = fields.value.findIndex(field => {
            return !field.clicked && field.value === FIELD.FILLED;
        });
        if (notFoundItemIndex === -1) {
            setWin();
        }
    };
    const setGameOver = () => {
        gameStatus.value = GAME_STATUS.FAIL;
        level.value = DEFAULT_LEVEL;
    };
    const setWin = () => {
        gameStatus.value = GAME_STATUS.WIN;
    };
    return {
        selectField
    }
}