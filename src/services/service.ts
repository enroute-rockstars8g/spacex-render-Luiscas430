export const getRocketByNum = async (num: number) => {
    try {
      const response = await fetch(`https://api.spacex.land/rest/rockets?limit=${num}`);
  
      if (response.status !== 200) return;
  
      const rocket = await response.json();
  
      return rocket;
    } catch (e) {
      console.error(e);
    }
  };
  
  
  