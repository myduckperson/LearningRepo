<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<script>

export default {
  data() {
    return {
      bruh: 'Definitely not the hello world string',
      theAttrObj: {
          id: "letsGooo",
          class: "theMomer"
      }
    }
  }
}
    
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            Bravo, you did it. You created the component! Lets gooo
        </h3>
        <h3 v-bind="theAttrObj"> {{ bruh }}</h3>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.theMomer{
    background-color: red;
}
.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
