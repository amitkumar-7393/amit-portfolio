const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  let data;

  try {
    data = await response.json();
  } catch {
    data = {
      success: false,
      message: "Invalid server response.",
    };
  }

  if (!response.ok) {
    throw new Error(
      data.message || `Request failed with status ${response.status}`
    );
  }

  return data;
};

export const submitContactForm = async (formData) => {
  return request("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export const checkApiHealth = async () => {
  return request("/health", {
    method: "GET",
  });
};

export default {
  submitContactForm,
  checkApiHealth,
};
