const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authhome'] = require('..\\middleware\\authhome.js')
middleware['authhome'] = middleware['authhome'].default || middleware['authhome']

middleware['checkcontext'] = require('..\\middleware\\checkcontext.js')
middleware['checkcontext'] = middleware['checkcontext'].default || middleware['checkcontext']

middleware['checkreq'] = require('..\\middleware\\checkreq.js')
middleware['checkreq'] = middleware['checkreq'].default || middleware['checkreq']

middleware['cookie_router_middeware'] = require('..\\middleware\\cookie_router_middeware.js')
middleware['cookie_router_middeware'] = middleware['cookie_router_middeware'].default || middleware['cookie_router_middeware']

middleware['initAuth'] = require('..\\middleware\\initAuth.js')
middleware['initAuth'] = middleware['initAuth'].default || middleware['initAuth']

middleware['mdGlobal'] = require('..\\middleware\\mdGlobal.js')
middleware['mdGlobal'] = middleware['mdGlobal'].default || middleware['mdGlobal']

middleware['mdlayout'] = require('..\\middleware\\mdlayout.js')
middleware['mdlayout'] = middleware['mdlayout'].default || middleware['mdlayout']

middleware['middware'] = require('..\\middleware\\middware.js')
middleware['middware'] = middleware['middware'].default || middleware['middware']

middleware['route'] = require('..\\middleware\\route.js')
middleware['route'] = middleware['route'].default || middleware['route']

export default middleware
