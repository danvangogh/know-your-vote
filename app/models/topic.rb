class Topic < ApplicationRecord

  validates :name, presence: true
  validates :description, presence: true
  validates :good, presence: true
  validates :bad, presence: true
  
end
