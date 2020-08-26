const apiService = new ApiService();

const init = () => {
  bindEventListeners();
  renderJobs();
};

function bindEventListeners() {
  const newJobForm = document.getElementById('job-form');
  const companyNavItem = document.getElementById('companies-nav');
  const jobNavItem = document.getElementById('jobs-nav');

  jobNavItem.addEventListener('click', renderJobs);
  companyNavItem.addEventListener('click', renderCompanies);
  newJobForm.addEventListener('submit', submitJob);
}

async function renderJobs() {
  const jobData = await apiService.getAllJobs();
  const appDiv = document.getElementById('app');
  let html = `<div class="flex-1 min-w-0 mb-2">
  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
    Job Board
  </h2>
</div>`;
  html += `<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">`;
  jobData.forEach((job) => {
    const newJob = new Job(job);
    html += newJob.renderIndexUI();
  });
  html += `</ul>`;
  appDiv.innerHTML = html;
}

async function renderCompanies() {
  const companyData = await apiService.getAllCompanies();
  const appDiv = document.getElementById('app');
  let html = `<div class="flex-1 min-w-0 mb-2">
  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
    Companies
  </h2>
</div>`;
  html += `<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">`;
  companyData.forEach((company) => {
    const newCompany = new Company(company);
    html += newCompany.renderIndexUI();
  });
  html += `</ul>`;
  appDiv.innerHTML = html;
}

async function submitJob(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const res = await apiService.submitJob(formData);
  if (res.ok) {
    renderJobs();
    e.target.reset();
  }
}

init();
