export default function myModule () {
  this.nuxt.hook('modules:done', (moduleContainer) => {
    // This will be called when all modules finished loading
    console.log('- - - - - - > module -> modules:done < - - - - - -')
  })

  this.nuxt.hook('render:before', (renderer) => {
    // Called after the renderer was created
    console.log('- - - - - - > module -> render:before < - - - - - -')
  })

  this.nuxt.hook('build:compile', async ({ name, compiler }) => {
    // Called before the compiler (default: webpack) starts
    console.log('- - - - - - > build:compile < - - - - - -')
  })

  this.nuxt.hook('generate:before', async (generator) => {
    // This will be called before Nuxt generates your pages
    console.log('- - - - - - > generate:before < - - - - - -')

  })
}