class CompaniesController < ApplicationController
  def index
    @companies = Company.all
    render json: @companies, methods: [:job_num]
  end
end
