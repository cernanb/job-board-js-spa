class Job {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.companyName = data.company_name;
    this.job_type = data.job_type;
  }

  renderIndexUI() {
    return `
        <li class="col-span-1 bg-white rounded-lg shadow">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm leading-5 font-medium truncate">${
                  this.title
                }</h3>
              </div>
              <p class="mt-1 mb-1 text-gray-500 text-sm leading-5 truncate">${
                this.companyName
              }</p>
              ${this.renderTypeBadge()}
            </div>
          </div>
        </li>
    `;
  }

  renderTypeBadge() {
    switch (this.job_type) {
      case 0:
        return `<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800">
        Full Time
      </span>`;
      case 1:
        return `<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-yellow-100 text-yellow-800">
        Part Time
      </span>`;
      default:
        return `<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-pink-100 text-pink-800">
        Contract
      </span>`;
    }
  }
}
