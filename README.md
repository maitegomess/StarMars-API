# Star Mars :rocket:	

### Você está pronto para explorar Marte? :flying_saucer:	

Nessa aventura, uma sonda da NASA pousou em Marte. É o seu dever explorar o quadrante do gigante vermelho usando a minha API. :joystick:	

![Star Mars](https://github.com/maitegomess/StarMars-API/blob/main/StarMars-IMG3.png)

### Para movimentar a sonda, você precisará dessas instruções:
## Endpoints -> 
| Tipo | Endpoint | Descrição |
| --- | --- | --- |
| GET | /position | mostra a posição atual da sonda |
| POST | /move | irá movimentar a sonda de acordo com os comandos |
| GET | /reset | irá resetar a sonda para a posição inicial |

## Comandos ->
```
GE: gira a face da sonda 90º à esquerda
GD: gira a face da sonda 90º à direita
M: move a sonda 1 unidade em direção à qual a face está apontada
```

* *Lembrando que: a sonda tem um **quadrante limite de movimento!** Ela não irá executar movimentos que `x` ou `y` sejam `> 5` ou `< 0`.* 
* *Você deve levar em consideração que a posição inicial da sonda é: { x: 0, y: 0, face: "D"}.*

Dentro da rota POST no endpoint /move você deve adicionar um JSON no seguinte modelo:
```
{
 "movements": ["M", "GE", "M", "GD", "M"]
}
```

Isso levará ao seguinte resultado:

```
{
  x: 2
  y: 1
  face: "D"
}
```

## Acesso ->
* Se você estiver rodando o servidor localmente, a URL será:
http://localhost:8081

* A URL de produção é:
https://starmars-api.herokuapp.com/


#### Para realizar o projeto, essas foram as tecnologias usadas:
-  [Node.js](https://nodejs.org/)
-  [Express](https://expressjs.com/)
-  [nodemon](https://nodemon.io/)
-  [Jest](https://jestjs.io/)
-  [Heroku](https://heroku.com/)
