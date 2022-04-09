export const getCharacterByID = async (id: number) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  
      if (response.status !== 200) return;
  
      const character = await response.json();
  
      return character;
    } catch (e) {
      console.error(e);
    }
  };
