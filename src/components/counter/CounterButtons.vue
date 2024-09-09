<template>
  <div :style="divStyles">
    <h3 :style="h3Styles">Update Count (Vue)</h3>
    <button @click="increment" :style="buttonStyles">+</button>
    <button @click="decrement" :style="buttonStyles">-</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, type CSSProperties } from "vue";
  import { useStore } from "@nanostores/vue";
  import { countAtom, incrementAtomCount, decrementAtomCount } from "../../lib/CounterStore.js";

  export default defineComponent({
    setup() {

      // Bind atom to component.
      const count = useStore(countAtom);

      // Increment and decrement.

      const increment = () => {
        incrementAtomCount();
      };

      const decrement = () => {
        decrementAtomCount();
      };

      // Styles
      const divStyles:CSSProperties = {
        background: "#f3e8ff",
        border: "solid 0.25rem #d8b4fe",
        padding: "1rem",
        textAlign: "center",
      };

      const h3Styles:CSSProperties = {
        fontSize: "1.25rem",
        margin: "0 0 1rem",
        textAlign: "center",
      };

      const buttonStyles:CSSProperties = {
        fontSize: "2rem",
        height: "4rem",
        width: "4rem",
      };

      return {
        // State
        count,

        // Methods
        increment,
        decrement,

        // Style
        divStyles,
        h3Styles,
        buttonStyles,
      };
    }
  });
</script>