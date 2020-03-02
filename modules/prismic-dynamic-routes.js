
const Prismic = require('prismic-javascript')
const fse = require('fs-extra')
const dotenv = require('dotenv')
dotenv.config()




export default async function asyncModule (context, error, req) {

	try{

		console.log('- - - > module -> prismic-dynamic-routes')

		// GET
	    const api = await Prismic.getApi(process.env.PRISMIC_API, {req})

	    const prismicRoutesRes = await api.query([
	        Prismic.Predicates.at('document.type', 'content')
	    ])

	    const prismicRoutesRoutes = prismicRoutesRes.results.map((cont) => {
		    return '/content/'+cont.uid
		})

	    // console.log('prismicRoutesRoutes -> ' , prismicRoutesRoutes)

	    
	    fse.outputJSON('./_data/prismic-routes.json', prismicRoutesRoutes, { spaces: 4 })
	

    } catch (e) {
      console.log(e)
    }

}