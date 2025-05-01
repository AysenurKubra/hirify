export default async function handler(req, res) {
    const { NEXT_PUBLIC_ADZUNA_APP_ID, NEXT_PUBLIC_ADZUNA_APP_KEY } = process.env;
  
    const endpoint = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${NEXT_PUBLIC_ADZUNA_APP_ID}&app_key=${NEXT_PUBLIC_ADZUNA_APP_KEY}&results_per_page=10&what=developer&sort_by=date`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("Adzuna fetch error:", error);
      res.status(500).json({ error: "Failed to fetch jobs" });
    }
  }
  