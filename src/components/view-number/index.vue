<script>
export default {
  name: 'viewNumber',
}
</script>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'

const count = reactive({
  before: ref(0),
  after: ref(0),
})

const formatCount = computed(() => {
  const target = count.after.toString().length

  return count.before
    .toString()
    .padStart(target, '0')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

onMounted(() => {
  count.after = 9999
})


const timeoutFunction = ref(null)
watch(() => count.after, () => {
  timeoutFunction.value = setInterval(() => {
    const target = Math.round(Math.random() * 100)
    if ((count.before + target) > count.after) {
      count.before = count.after
      clearInterval(timeoutFunction.value)
    } else count.before += target
  }, 40)
})

// setInterval(() => count.before++, 1000)

</script>

<template lang="pug">
.number__wrap
  .number__container
    .number__list(
      :class="tw([\
        'flex',\
        'items-center',\
      ])"
    )
      .number__item(
        v-for="(item, index) of formatCount"
        :key="index"
      )
        .number__com(
          v-if="isNaN(item)"
          :class="tw([\
            'h-[90px]',\
            'w-[20px]',\
          ])"
        )
        .number__count(
          v-else
          :class="tw([\
            'relative',\
            'overflow-hidden',\
            'h-[90px]',\
            'w-[60px]',\
          ])"
        )
          .number__img(
            :class="[\
              `number__${item}`,\
              tw([\
                'absolute',\
              ])\
            ]"
          )
</template>

<style lang="scss" scoped>
.number__img {
  $num: 90px;

  height: calc(11 * $num);
  width: 60px;
  background-image: url('./images/num00.png'), url('./images/num01.png'), url('./images/num02.png'), url('./images/num03.png'), url('./images/num04.png'), url('./images/num05.png'), url('./images/num06.png'), url('./images/num07.png'), url('./images/num08.png'), url('./images/num09.png'), url('./images/num00.png');
  background-repeat: no-repeat;
  background-position: center calc(0 * $num), center calc(1 * $num), center calc(2 * $num), center calc(3 * $num), center calc(4 * $num), center calc(5 * $num), center calc(6 * $num), center calc(7 * $num), center calc(8 * $num), center calc(9 * $num), center calc(10 * $num);

  @for $i from 0 through 10  {
    &.number__#{$i} {
      top: calc(-#{$i} * #{$num});
      animation: move#{$i} .5s ease-in-out;
    }

    @keyframes move#{$i} {
      0% {
        @if $i == 0 {
          top: calc(-9 * #{$num})
        } @else {
          top: calc(-#{$i - 1} * #{$num})
        }
      }

      100% {
        @if $i == 0 {
          top: calc(-10 * #{$num})
        } @else {
          top: calc(-#{$i} * #{$num})
        }
      }
    }
  }

  

  // &.number__0 {
  //   transition: none;
  // }
}

.number__com {
  background: url('./images/numcom.png') no-repeat 0 0;
}
</style>
