<template>
  <div class="Loading">
    <div class="Loading-content">
      <svg class="Loading-icon" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
           preserveAspectRatio="xMidYMid">
        <g transform="rotate(180 50 50)">
          <rect y="15" height="44.8443" fill="#00bcd4" x="15" width="10">
            <animate attributeName="height" calcMode="spline" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.4s" repeatCount="indefinite"></animate>
          </rect>
          <rect y="15" height="69.9554" fill="#00bcd4" x="35" width="10">
            <animate attributeName="height" calcMode="spline" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.2s" repeatCount="indefinite"></animate>
          </rect>
          <rect y="15" height="30.8454" fill="#00bcd4" x="55" width="10">
            <animate attributeName="height" calcMode="spline" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.6s" repeatCount="indefinite"></animate>
          </rect>
          <rect y="15" height="54.6369" fill="#00bcd4" x="75" width="10">
            <animate attributeName="height" calcMode="spline" values="50;70;30;50" keyTimes="0;0.33;0.66;1" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g>
      </svg>
      <p class="Loading-text" v-if="text">\{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    text: {
      type: String,
      default: '正在加载...'
    }
  }
}
</script>

<style lang="less" scoped>
  .Loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;

    &:before {
      content: '\0020';
      width: 0;
      height: 100%;
    }
  }

  .Loading:before,
  .Loading-content {
    display: inline-block;
    vertical-align: middle;
  }

  .Loading-icon {
    width: 100px;
    height: 100px;
  }

  .Loading-text {
    font-size: 18px;
  }
</style>
