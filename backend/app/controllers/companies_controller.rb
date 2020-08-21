class CompaniesController < ApplicationController
  def index
    @companies = Company.all
    render json: @companies, include: [:jobs]
  end
end
