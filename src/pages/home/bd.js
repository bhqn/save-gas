const handleFormSubmit = async (data) => {
    const response = await fetch("http://localhost:5000/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setPostos(result.postos); // Atualize o estado com os postos retornados.
  };