const API_BASE_URL = 'http://54.236.64.216:5000';

export const request = async (url, method = 'GET', payload = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(method !== 'GET' && payload && { body: JSON.stringify(payload) })
    };

    let finalUrl = `${API_BASE_URL}${url}`;
    if (method === 'GET' && payload) {
      const queryParams = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value);
        }
      });
      finalUrl += `?${queryParams.toString()}`;
    }

    const response = await fetch(finalUrl, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error.message);
    throw new Error(`API Error: ${error.message}`);
  }
};

export const getAllCategories = async (page = 1, limit = 10, catLevel = 1, parentCategory = '', sort = 'priority') => {
  return await request('/categories/all', 'GET', {
    page, limit, catLevel, parentCategory, sort
  });
};

export const uploadImage = async (metadata, createdBy, categories = true, profile = false, services = false, 
  background = false, thumbnail = false, gallery = false, folderName) => {
  return await request('/images/upload', 'POST', {
    metadata, createdBy, categories, profile, services, background, 
    thumbnail, gallery, folderName
  });
};
