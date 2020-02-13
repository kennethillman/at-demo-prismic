import Vue from "vue"
import VueWaypoint from "vue-waypoint"

if (process.client) {
  Vue.use(VueWaypoint)
}
