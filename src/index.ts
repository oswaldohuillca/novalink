import { Hono } from 'hono'
import { etag } from 'hono/etag'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import ubigeo from './mocks/ubigeo.json' assert { type: "json" }



const app = new Hono()
app.use('*', etag(), logger())


app.use('/api/*', cors())
/**
 * @api {get} / Get the API documentation
 * @apiName GetDocumentation
 * @apiGroup Documentation
 * @apiVersion 1.0.0
 * @apiSuccess {String} message API Documentation
 * @apiSuccessExample {html} Success
 *  HTTP/1.1 200 OK
 */
app.get('/', serveStatic({ root: './', }))
app.get('/assets/*', serveStatic({ root: './' }))
/**
 * @api {get} /api/v1/peru/ubigeo Get all departments
 * @apiName GetDepartments
 * @apiGroup Ubigeo
 * @apiVersion 1.0.0
 * @apiSuccess {Object[]} departments List of departments
 * @apiSuccess {String} departments.codigo_ubigeo Department code
 * @apiSuccess {String} departments.nombre_ubigeo Department name
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 */
app.get('/api/v1/peru/ubigeo', (c) => {
  return c.json(ubigeo)
})

/**
 * @api {get} /api/v1/peru/ubigeo Get all departments
 * @apiName GetDepartments
 * @apiGroup Ubigeo
 * @apiVersion 1.0.0
 * @apiSuccess {Object[]} departments List of departments
 * @apiSuccess {String} departments.codigo_ubigeo Department code
 * @apiSuccess {String} departments.nombre_ubigeo Department name
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 */
app.get('/api/v1/peru/ubigeo/:department', (c) => {
  const department = ubigeo.find(el => el.codigo_ubigeo === c.req.param('department'))
  if (!department) return c.json({ message: 'Department Resource Not found' }, 404)
  return c.json(department)
})

/**
 * @api {get} /api/v1/peru/ubigeo/:department/:province Get all provinces
 * @apiName GetProvinces
 * @apiGroup Ubigeo
 * @apiVersion 1.0.0
 * @apiSuccess {Object[]} provinces List of provinces
 * @apiSuccess {String} provinces.codigo_ubigeo Province code
 * @apiSuccess {String} provinces.nombre_ubigeo Province name
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 */
app.get('/api/v1/peru/ubigeo/:department/:province', (c) => {

  const department = ubigeo.find(el => el.codigo_ubigeo === c.req.param('department'))
  if (!department) return c.json({ message: 'Department Resource Not found' }, 404)

  const province = department.provinces.find(el => el.codigo_ubigeo === c.req.param('province'))
  if (!province) return c.json({ message: 'Province Resource Not found' }, 404)

  return c.json(province)
})

/**
 * @api {get} /api/v1/peru/ubigeo/:department/:province/:district Get all districts
 * @apiName GetDistricts
 * @apiGroup Ubigeo
 * @apiVersion 1.0.0
 * @apiSuccess {Object[]} districts List of districts
 * @apiSuccess {String} districts.codigo_ubigeo District code
 * @apiSuccess {String} districts.nombre_ubigeo District name
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 */
app.get('/api/v1/peru/ubigeo/:department/:province/:district', (c) => {
  const department = ubigeo.find(el => el.codigo_ubigeo === c.req.param('department'))
  if (!department) return c.json({ message: 'Department Resource Not found' }, 404)

  const province = department.provinces.find(el => el.codigo_ubigeo === c.req.param('province'))
  if (!province) return c.json({ message: 'Province Resource Not found' }, 404)

  const district = province.districts.find(el => el.codigo_ubigeo === c.req.param('district'))
  if (!district) return c.json({ message: 'District Resource Not found' }, 404)

  return c.json(district)
})


export default app
