import {defineComponent, computed, ref, Ref, watch} from "vue";

export default defineComponent({
    name: "Fraction",
    props: {
        numerator: {type: Number, default: 0},
        denominator: {type: Number, default: 0},
    },
    setup(props) {
        const blockSize: Ref<number> = ref(1000);

        const numeratorTrigger = watch(() => props.numerator, (value) => {
            if (value / props.denominator > 1) {
                blockSize.value = 980 / value;
                return;
            }

            blockSize.value = 980 / props.denominator;
        })

        const denominatorTrigger = watch(() => props.denominator, (value) => {
            if (props.numerator / value > 1) {
                blockSize.value = 980 / props.numerator;
                return;
            }

            blockSize.value = 980 / value
        })

        const numeratorRef = computed<number[]>(() => {
            if (0 == props.numerator) {
                return [];
            }

            const array = [];

            for (let i = 1; i <= props.numerator; i++) {
                array.push(i);
            }

            return array;
        })

        const denominatorRef = computed<number[]>(() => {
            if (0 == props.denominator) {
                return [];
            }

            const array = [];

            for (let i = 1; i <= props.denominator; i++) {
                array.push(i);
            }

            return array;
        })

        return {
            blockSize,
            numeratorRef,
            denominatorRef
        }
    }
})