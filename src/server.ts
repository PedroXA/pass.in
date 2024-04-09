import fastify from "fastify"

// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...

// Corpo da requisição (Request Body)
// Parâmetros de busca (Search Params / Query Params) `http://localhost:3333/users?name=Pedro`
// Parâmetros de rota  (Route Params) -> Identificação de recursos `DELETE http://localhost:3333/users/5`
// Cabeçalhos  (Headers) -> Contexto 


// Semânticas = Significado


const app = fastify()

app.get('/', () => {
    return 'Hello APP'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})