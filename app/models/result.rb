class Result < ApplicationRecord
  validates :grn, presence: true 
  validates :ndp, presence: true
  validates :lib, presence: true
  validates :cp, presence: true
end
