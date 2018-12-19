# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Topic.delete_all
Quote.delete_all
Party.delete_all

parties = Party.create!([{name: 'GRN'}, {name: 'NDP'}, {name: 'LIB'}, {name: 'CP'}])

grn = parties[0].id
ndp = parties[1].id
lib = parties[2].id
cp = parties[3].id

quotes = Quote.create!([
  {text: "If young people aged 18 to 21 are forced to buy pot from criminals, it will not help us eliminate the black market", party_id: lib},
  {text: "Canada needs a domestic energy strategy and a real climate plan that makes sense.", party_id: grn},
  {text:"The Liberals would love to have people believe that the choice is a carbon tax or nothing. I reject that.", party_id: cp},
  {text: "Government policies and services continue to be pervaded by prejudice, and too many Canadians who identify as LGBTQI2S+ find themselves the targets of structural discrimination... This has to end, starting with concrete moves by the federal government.", party_id: ndp}])


topics = Topic.create!([
  {name: "Legalized Cannabis", description: "At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. He simply says to everyone in the room, I am here because of Ashley. But I will also renew the tough, direct diplomacy that can prevent Iran from obtaining nuclear weapons and curb Russian aggression. They have killed people of different faiths - more than any other, they have killed Muslims.",
  good: "People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.",
  bad: "Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
  "
  },
  {name: "Keystone XL Pipeline", description: "At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. He simply says to everyone in the room, I am here because of Ashley. But I will also renew the tough, direct diplomacy that can prevent Iran from obtaining nuclear weapons and curb Russian aggression. They have killed people of different faiths - more than any other, they have killed Muslims.",
  good: "People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.",
  bad: "Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
  "
},
  {name: "Carbon Tax", description: "At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. He simply says to everyone in the room, I am here because of Ashley. But I will also renew the tough, direct diplomacy that can prevent Iran from obtaining nuclear weapons and curb Russian aggression. They have killed people of different faiths - more than any other, they have killed Muslims.",
  good: "People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.",
  bad: "Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
  "
  },
  {name: "Subsidized Housing", description: "At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. He simply says to everyone in the room, I am here because of Ashley. But I will also renew the tough, direct diplomacy that can prevent Iran from obtaining nuclear weapons and curb Russian aggression. They have killed people of different faiths - more than any other, they have killed Muslims.",
  good: "People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.",
  bad: "Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
  "
  },
  {name: "Proportional Representation", description: "At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. He simply says to everyone in the room, I am here because of Ashley. But I will also renew the tough, direct diplomacy that can prevent Iran from obtaining nuclear weapons and curb Russian aggression. They have killed people of different faiths - more than any other, they have killed Muslims.",
  good: "People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.",
  bad: "Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
  "
  },
  {name: "Prince Eric's Hair", description: "At every opportunity, they've told evangelical Christians that Democrats disrespect their values and dislike their Church, while suggesting to the rest of the country that religious Americans care only about issues like abortion and gay marriage; school prayer and intelligent design. He simply says to everyone in the room, I am here because of Ashley. But I will also renew the tough, direct diplomacy that can prevent Iran from obtaining nuclear weapons and curb Russian aggression. They have killed people of different faiths - more than any other, they have killed Muslims.",
  good: "People don't expect government to solve all their problems. They stood on the Edmund Pettus Bridge, as the blows of billy clubs rained down. There was even a time when the Christian Coalition determined that its number one legislative priority was tax cuts for the rich. But we can only achieve it together.",
  bad: "Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn't have the money to go to college. But we cannot walk away this time. These challenges are not all of government's making.
  "
  },
  ])
