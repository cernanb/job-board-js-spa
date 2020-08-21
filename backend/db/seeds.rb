# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


5.times do
  c = Company.create( name: Faker::Company.name, 
                      location: "#{Faker::Address.city}, #{Faker::Address.state_abbr}"
                    )

  3.times do 
    c.jobs.create( job_type: rand(0..2), 
                   title: Faker::Job.title, 
                   description: Faker::Lorem.paragraph(sentence_count: 2)
                 )
  end
end