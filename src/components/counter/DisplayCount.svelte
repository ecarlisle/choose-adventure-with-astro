<script lang="ts">
  import { countAtom, incrementAtomCount, decrementAtomCount } from "../../lib/CounterStore";

  const count = countAtom;

  function increment() {
    incrementAtomCount();
  }

  function decrement() {
    incrementAtomCount();
  }
</script>

<div>
  <h3>View Count (Svelte)</h3>
  <p class="count">{$count}</p>
</div>

<style>
  div {
    background: #e0f2fe;
    border: solid 0.25rem #7dd3fc;
    padding: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1rem;
    text-align: center;
  }

  .count {
    font: normal normal normal 2.4rem/1 monospace;
    text-align: center;
  }
</style>