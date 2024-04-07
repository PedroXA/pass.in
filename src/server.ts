import fastify from "fastify"

// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...
// Corpo da requisição
// Parâmetros de busca
// Parâmetros de rota
// Cabeçalhos

const app = fastify()

app.get('/', () => {
    return 'Hello APP'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})