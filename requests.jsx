//people
{/* { "message": "ok",
    "total_records": 82,
    "total_pages": 9,
    "previous": null,
    "next": "https://www.swapi.tech/api/people?page=2&limit=10",
    "results": [
      {
        "uid": "1",
        "name": "Luke Skywalker",
        "url": "https://www.swapi.tech/api/people/1"
      },
      {
        "uid": "2",
        "name": "C-3PO",
        "url": "https://www.swapi.tech/api/people/2"
      },
      {
        "uid": "3",
        "name": "R2-D2",
        "url": "https://www.swapi.tech/api/people/3"
      },
      {
        "uid": "4",
        "name": "Darth Vader",
        "url": "https://www.swapi.tech/api/people/4"
      },
      {
        "uid": "5",
        "name": "Leia Organa",
        "url": "https://www.swapi.tech/api/people/5"
      },
      {
        "uid": "6",
        "name": "Owen Lars",
        "url": "https://www.swapi.tech/api/people/6"
      },
      {
        "uid": "7",
        "name": "Beru Whitesun lars",
        "url": "https://www.swapi.tech/api/people/7"
      },
      {
        "uid": "8",
        "name": "R5-D4",
        "url": "https://www.swapi.tech/api/people/8"
      },
      {
        "uid": "9",
        "name": "Biggs Darklighter",
        "url": "https://www.swapi.tech/api/people/9"
      },
      {
        "uid": "10",
        "name": "Obi-Wan Kenobi",
        "url": "https://www.swapi.tech/api/people/10"
      }
    ]
  }

  //Planets

  {
    "message": "ok",
    "result": {
      "properties": {
        "diameter": "10465",
        "rotation_period": "23",
        "orbital_period": "304",
        "gravity": "1 standard",
        "population": "200000",
        "climate": "arid",
        "terrain": "desert",
        "surface_water": "1",
        "created": "2024-11-15T10:42:26.237Z",
        "edited": "2024-11-15T10:42:26.237Z",
        "name": "Tatooine",
        "url": "https://www.swapi.tech/api/planets/1"
      },
      "description": "A planet.",
      "_id": "5f7254c11b7dfa00041c6fae",
      "uid": "1",
      "__v": 0
    }
  }

  //starships

  {
    "message": "ok",
    "result": {
      "properties": {
        "model": "DS-1 Orbital Battle Station",
        "starship_class": "Deep Space Mobile Battlestation",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "crew": "342,953",
        "passengers": "843,342",
        "max_atmosphering_speed": "n/a",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "pilots": [],
        "created": "2020-09-17T17:55:06.604Z",
        "edited": "2020-09-17T17:55:06.604Z",
        "name": "Death Star",
        "url": "https://www.swapi.tech/api/starships/9"
      },
      "description": "A Starship",
      "_id": "5f63a34fee9fd7000499be21",
      "uid": "9",
      "__v": 0
    }
  }*/}
    

  // preguntar porque esta forma de hacer el pedido

  const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        url: 'https://www.swapi.tech/api/',
        people: [],
        planets: [],
        starships: [],
        favorites: {}
      },
      actions: {
        getPeople: async (types) => {
          try {
            const res = await fetch(getStore().url + `${types}/)`);
            if(!res.ok) throw new Error('Something went wrong loading the characters');
            const data = await res.json();
            setStore({[types]: data.results})
          } catch (error) {
            console.error(error)
          }
        },
        getPlanets: async (types) => {
          try {
            const res = await fetch(getStore().url +  `${types}/)`);
            if(!res.ok) throw new Error('Something went wrong loading planets');
            const data = await res.json();
            setStore({[types]: data.results})
          } catch (error) {
            console.error(error)
          }
        },
        getStarships: async (types) => {
          try {
            const res = await fetch(getStore().url +  `${types}/)`);
            if(!res.ok) throw new Error('Something went wrong loading the starships');
            const data = await res.json();
            setStore({[types]: data.results})
          } catch (error) {
            console.error(error)
          }
        },
        getCharacterDetails: async (types, uid) => {
          try {
            const res = await fetch(getStore().url + `/${types}/${uid}`);
            if(!res.ok) throw new Error('Something went wrong loadig the characters');
            const data = await res.json();
            console.log(data)
            setStore({character_detail: data.result})
          } catch (error) {
            console.error(error)
          }
        },
        clearCharacterInfo: () => {
          setStore({character_detail: {}})
        }
  
      }
    };
  };
  
  export default getState;
  

