class Company < ApplicationRecord
    has_many :jobs

    def job_num
        self.jobs.size
    end
end
