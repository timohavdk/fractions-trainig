import {defineComponent, computed, ref, Ref, watch} from "vue";
import Fraction from "../fraction/fraction.vue";

export default defineComponent({
    name: "FractionInput",
    components: {
      Fraction
    },
    props: {
        number: {type: Number, default: 0}
    },
    setup(props) {
        const numerator: Ref<number> = ref(0);

        const denominator: Ref<number> = ref(0);

        return {
            numerator,
            denominator
        }
    }
})