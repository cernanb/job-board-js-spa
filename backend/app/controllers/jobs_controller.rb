class JobsController < ApplicationController
  def create
    job = Job.new(job_params)
    if job.save
      render json: job, methods: [:company_name]
    else
      render json: { status: 500 }
    end
  end

  def index
    jobs = Job.all
    render json: jobs, methods: [:company_name]
  end

  private
  def job_params
    params.require(:job).permit(:title, :description, :job_type, :company_id)
  end
end