class Job < ApplicationRecord
  belongs_to :company

  enum status: [ :full_time, :part_time, :contract ]
end
