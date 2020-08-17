export const fileUpload = async file => {
  const cloudUrl = process.env.REACT_APP_CLOUDINARY;

  const formData = new FormData();
  formData.append("upload_preset", "curso-react-journal");
  formData.append("file", file);

  try {
    const res = await fetch(cloudUrl, {
      method: "Post",
      body: formData
    });

    if (res.ok) {
      const cloudRes = await res.json();
      return cloudRes.secure_url;
    } else {
      throw await res.json();
    }
  } catch (error) {
    throw error;
  }
};
