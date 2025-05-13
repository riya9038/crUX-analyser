export const fetchCruxData = async (urls) => {
  try {
    const response = await fetch("http://localhost:5000/api/crux", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urls }),
    });

    const res = await response.json();

    if (!res || res.error) {
      throw new Error(res.error || "Unknown error occurred");
    }

    return res;
  } catch (error) {
    console.error("Error fetching CrUX data:", error);
    throw error;
  }
};
