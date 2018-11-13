<template>
  <div class="row dashboard-info-widgets">
    <div class="col-md-6 col-xl-3">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              <i class="ion ion-md-arrow-up text-primary stats-icon"></i>
              {{data[0]}}
            </div>
            <div class="stats-title">{{fields[0]}}</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-6 col-xl-3">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              <i class="ion ion-md-arrow-down text-danger stats-icon"></i>
              {{data[1]}}
            </div>
            <div class="stats-title">{{fields[1]}}</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-6 col-xl-3">
      <vuestic-widget class="info-widget brand-danger">
        <div class="info-widget-inner">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                {{data[2]}}
              </div>
              <div class="stats-title">{{fields[2]}}</div>
            </div>
<!--
            <div class="chart-container">
              <vuestic-progress-bar type="circle" :value="2" theme="White" backgroundTheme="Danger" />
            </div> -->
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-6 col-xl-3">
      <vuestic-widget class="info-widget brand-info">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              <!-- <i class="ion ion-md-people stats-icon icon-wide"></i> -->
              {{data[3]}}
            </div>
            <div class="stats-title">{{fields[3]}}</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-info-widgets',
  props: ['data', 'fields']
}

</script>

<style lang="scss" scoped>
  .stats-number,
  .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
