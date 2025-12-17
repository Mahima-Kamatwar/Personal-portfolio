axios.post("/api/projects", formData, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
