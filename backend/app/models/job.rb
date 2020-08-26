class Job < ApplicationRecord
  belongs_to :company

  enum status: [ :full_time, :part_time, :contract ]

  def company_name
    self.company.name
  end
end
