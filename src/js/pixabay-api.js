const apiKey = 'YOUR_API_KEY';

export default {
  async fetchImages(query) {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      return data.hits;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  },
};

