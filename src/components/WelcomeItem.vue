<template>
  <a :class="internalRoute?'nodisplay':''" class="item" :href="link">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 :class="highlight?'item-highlight':''">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </a>

  <RouterLink :class="internalRoute?'':'nodisplay'" class="item" :to="link">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 :class="highlight?'item-highlight':''">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  defineProps(['link', 'highlight', 'internalRoute'])
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  border-radius: 10px;
}

.nodisplay {
  display: none;
}

.item-highlight {
  color: black;
  mix-blend-mode: lighten;
  background-color: white;
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
}

.details {
  flex: 1;
  margin-left: 1rem;
  margin-right: 20px;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 3);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
