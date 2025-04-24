const fetchData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.com/data');
  
      if (!response.ok) {
        throw new Error('API response was not ok');
      }
  
      const data = await response.json();
      console.log('Fetched from API:', data);
      return data;
    } catch (error) {
      console.error('Error fetching from API. Using fallback data.', error);
  
      // Fallback data
      const fallbackData = [
        { id: 1, name: 'Fallback Item 1' },
        { id: 2, name: 'Fallback Item 2' },
      ];
  
      return fallbackData;
    }
  };
  
  fetchData().then((data) => {
    // Use the data (either from API or fallback)
    console.log('Data used:', data);
  });
  