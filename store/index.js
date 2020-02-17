export const state = () => ({
  menu: false,
  orientation: false,
  menuNavigate: false,
  pageData: null,
  api: null,
  searchIndex: false
})

export const mutations = {
  setMenu(state, res) {
    state.menu = res
  },
  setOrientation(state, res) {
    state.orientation = res
  },
  setMenuNavigate(state, res) {
    state.menuNavigate = res
  },
  setPageData(state, res) {
    state.pageData = res
  },
  setApi(state, res) {
    state.api = res
  },
  setSearchIndex(state, data) {
    state.searchIndex = data
  }
}

export const actions = {
    async nuxtServerInit ({ commit }, { req }) {

    console.log('nuxtServerInit DEMO PRISMIC');

    let testIndex = [
        {
          name: 'Genisis',
          description: 'Genesis answers two big questions: “How did God’s relationship with the world begin?” and “Where did the nation of Israel come from?”'
        }, {
          name: 'Exodus',
          description: 'God saves Israel from slavery in Egypt, and then enters into a special relationship with them.'
        }, {
          name: 'Leviticus',
          description: 'God gives Israel instructions for how to worship Him.'
        }, {
          name: 'Numbers',
          description: 'srael fails to trust and obey God, and wanders in the wilderness for 40 years.'
        }, {
          name: 'Deuteronomy',
          description: 'Moses gives Israel instructions (in some ways, a recap of the laws in Exodus–Numbers) for how to love and obey God in the Promised Land.'
        }, {
          name: 'Joshua',
          description: 'Joshua (Israel’s new leader) leads Israel to conquer the Promised land, then parcels out territories to the twelve tribes of Israel.'
        }, {
          name: 'Judges',
          description: 'Israel enters a cycle of turning from God, falling captive to oppressive nations, calling out to God, and being rescued by leaders God sends their way (called “judges”).'
        }, {
          name: 'Ruth',
          description: 'The book of Ruth tells a touching story of the love and devotion of an ancestor of David and Jesus Christ.'
        }, {
          name: '1 Samuel',
          description: 'Israel demands a king, who turns out to be quite a disappointment.'
        }, {
          name: '2 Samuel',
          description: 'David, a man after God’s own heart, becomes king of Israel.'
        }, {
          name: '1 Kings',
          description: 'The kingdom of Israel has a time of peace and prosperity under King Solomon, but afterward splits, and the two lines of kings turn away from God.'
        }, {
          name: '2 Kings',
          description: 'Both kingdoms ignore God and his prophets, until they both fall captive to other world empires.'
        }
      ]



    commit('setSearchIndex', testIndex)

  },
  setMenu(vuexContext, res) {
    vuexContext.commit('setMenu', res)
  },
  setOrientation(vuexContext, res) {
    vuexContext.commit('setOrientation', res)
  },
  setMenuNavigate(vuexContext, res) {
    vuexContext.commit('setMenuNavigate', res)
  },
  setPageData(vuexContext, res) {
    vuexContext.commit('setPageData', res)
  },
  setApi(vuexContext, res) {
    vuexContext.commit('setApi', res)
  },
  setSearchIndex(vuexContext, data) {
    vuexContext.commit('setSearchIndex', data)
  }
}

export const getters = {
  getMenu(state) {
    return state.menu
  },
  getOrientation(state) {
    return state.orientation
  },
  getMenuNavigate(state) {
    return state.menuNavigate
  },
  getPageData(state) {
    return state.pageData
  },
  getApi(state) {
    return state.api
  },
  getSearchIndex(state) {
    return state.searchIndex
  }
}
