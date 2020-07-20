# Desafio Gama Experience - edição #34x

O desafio consiste em consumir uma api com dados de pokemons, mostrar os dados e implementar um gráfico qualquer.

**Utilizando as seguintes bibliotecas**:
* [React JS](https://pt-br.reactjs.org/) - Por ser requisito do desafio, para criar uma single page application
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Para estilização e uso dos componentes
* [React Bootstrap](https://react-bootstrap.github.io/) - Para facilitar o uso do bootstrap com o React
* [Chart JS](https://www.chartjs.org/) - Para construção do gráfico
* [Axios](https://github.com/axios/axios) - Para consumo de apis

## Dados utilizados

Os dados foram obtidos através da [api de pokemons](https://pokeapi.co) e foram utilizadas duas apis para a resolução do desafio:

### [Listar os pokemons](https://pokeapi.co/api/v2/pokemon)

```bash
$ curl --request GET \
    --url https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}
```
ou
```javascript
axios
  .get(
    'https://pokeapi.co/api/v2/pokemon',
    {
      offset: ${OFFSET},
      limit: ${LIMIT}
    }
  ),
```

**parâmetros**:
* OFFSET: início da listagem
* LIMIT: quantidade de dados para serem retornados

####  O retorno

Sempre será retorado um objeto com a quantidade total de pokemons (`count`), a url para próxima página (`next`), a url para a página anterior (`previous`) e uma lista com os pokemons, contentdo o nome (`name`) e a url para delhes(`url`)

```json
   {
      "count": 964,
      "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      "previous": null,
      "results": [
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        ...
      ]
     }
   }
 ```

### [Listar os detalhes do pokemon](https://pokeapi.co/api/v2/pokemon/pikachu)

```bash
$ curl --request GET \
    --url https://pokeapi.co/api/v2/${SPECIFIC_POKEMON}
```
OU
```javascript
axios
  .get(
    `https://pokeapi.co/api/v2/${SPECIFIC_POKEMON}`,
  ),
```

**parâmetros**:
* SPECIFIC_POKEMON: id ou nome do pokemon


### O retorno

Será retornado um objeto com diversas propriedades, mas usaremos apenas alguns, dentre eles o nome (`name`), a imagem (`sprites`), os tipos (`types`), o número (`id`), e os atributos (`stats`)
```json
   {
      "id": 35,
      "name": "pikachu",
      "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
        "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
        "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
      },
      "stats": [
        {
          "base_stat": 35,
          "effort": 0,
          "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          "base_stat": 55,
          "effort": 0,
          "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          "base_stat": 40,
          "effort": 0,
          "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          "base_stat": 50,
          "effort": 0,
          "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          "base_stat": 50,
          "effort": 0,
          "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          "base_stat": 90,
          "effort": 2,
          "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "electric",
            "url": "https://pokeapi.co/api/v2/type/13/"
          }
        }
      ],
   }
 ```

*dentro de sprites temos diversas imagens sendo elas.
* `back_default` - imagem de costas do pokemon (caso o pokemon tenha diferença de gênero, essa será a imagem do gênero masculino)
* `back_female` - imagem de costas do pokemon do gênero feminino (caso o pokemon não tenha diferença de gênero virá null)
* `back_shiny` - imagem de costas do pokemon shiny (caso o pokemon tenha diferença de gênero, essa será a imagem do gênero masculino),
* `back_shiny_female` - imagem de costas do pokemon shiny do gênero feminino (caso o pokemon não tenha diferença de gênero virá null)
* `front_default` - imagem de frente do pokemon (caso o pokemon tenha diferença de gênero, essa será a imagem do gênero masculino)
* `front_female` - imagem de frente do pokemon do gênero feminino (caso o pokemon tenha diferença de gênero, essa será a imagem do gênero masculino),
* `front_shiny` - imagem de frente do pokemon shiny (caso o pokemon tenha diferença de gênero, essa será a imagem do gênero masculino),
* `front_shiny_female` - imagem de frente do pokemon shiny do gênero feminino (caso o pokemon não tenha diferença de gênero virá null)


![back_default](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png)
![back_female](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png)
![back_shiny](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png),
![back_shiny_female](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png),
![front_default](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png),
![front_female](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png)
![front_shiny](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png),
![front_shiny_female](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png)

## Subir o projeto
Para subir o projeto é necessário ter o [node](https://nodejs.org/en/) instalado no seu computador.

Com o projeto em seu computador, é necessário rodar o comando `npm install` para instalar as dependências do projeto.

Tendo as dependências instaladas com sucesso temos os seguintes scripts dentro do package.json:

* <b>start</b> - compila o projeto e o disponibiliza no endereço `localhost:3000`;
* <b>build</b> - compila o projeto e gera o resultado dentro da pasta build;
* <b>test</b> - roda os testes unitários do projeto;

## Resultado final

O exemplo pode ser acessado [aqui](https://leonardopaganelli.github.io/gama-pokedex/build/) ou clonando o projeto e abrindo o arquivo index.html por qualquer navegador.

![Resultado final](/gama-pokedex.gif)

## Pendências futuras

- [ ] Implementar testes

## Agradecimentos

[Raphael de Falco Ayres](https://www.linkedin.com/in/raphael-de-falco-ayres-6b053826/), por inspirar com o layout do [projeto que ele fez](https://xenodochial-carson-62f014.netlify.app/)