class ApiService {
  constructor() {
    this.baseUrl = `http://localhost:3000`;
  }

  async getAllCompanies() {
    const res = await fetch(`${this.baseUrl}/companies`, {
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }

  async getAllJobs() {
    const res = await fetch(`${this.baseUrl}/jobs`, {
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }

  async submitJob(jobData) {
    const res = await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      body: jobData,
    });
    return res;
  }
}
