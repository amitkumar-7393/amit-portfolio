const FORMSPREE_URL = "https://formspree.io/f/mrpzgpng";

export const submitContactForm = async (formData) => {
  const response = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.errors?.[0]?.message ||
        data?.message ||
        "Unable to send message."
    );
  }

  return {
    success: true,
    message: "Message sent successfully.",
  };
};

export default {
  submitContactForm,
};
