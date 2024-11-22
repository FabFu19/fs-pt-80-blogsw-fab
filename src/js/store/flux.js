const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api/',
			people: JSON.parse(localStorage.getItem('people')) || [],
			favorites: JSON.parse(localStorage.getItem('favorites')) || [],
			all_details: {},
			selection_view: 'home'
		},
		actions: {
			saveLocalStorage: () => {
				localStorage.setItem('people', JSON.stringify(getStore().people));
                localStorage.setItem('favorites', JSON.stringify(getStore().favorites));
			},
			setSelectionView: (view) => setStore({selection_view: view}),
			addRemoveFavs: (favs) => {
				const store = getStore();
				const fav = store.favorites.some(el => el.uid === favs.uid && el.types === favs.types);
			
				if (fav) {
					setStore({
						favorites: store.favorites.filter(el => !(el.uid === favs.uid && el.types === favs.types))
					});
				} else {
					
					if (favs.name && favs.uid && favs.img && favs.types) {
						setStore({
							favorites: [...store.favorites, favs],
						});
					} else {
						console.error("Invalid favorite object:", favs);
					}
				}
				getActions().saveLocalStorage();
			},
			getDataBank: async (types) => {
				if (getStore()[types]?.length > 0) return;
				try {
					const res = await fetch(getStore().url + `${types}/`);
					if(!res.ok) throw new Error('Something went wrong loading the characters');
					const data = await res.json();
					setStore({[types]: data.results})
				} catch (error) {
					console.error(error)
				}
				getActions().saveLocalStorage();
			},
			getAllDetails: async (types, uid) => {
				try {
					const res = await fetch(getStore().url + `/${types}/${uid}`);
					if(!res.ok) throw new Error('Something went wrong loadig data');
					const data = await res.json();
					console.log(data)
					setStore({all_details: data.result})
				} catch (error) {
					console.error(error)
				}
			},
			clearCharacterInfo: () => {
				setStore({all_details: {}})
			}
		}
		
	};
};

export default getState;
