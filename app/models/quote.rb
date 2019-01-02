class Quote < ApplicationRecord
  belongs_to :party

  validates :text, presence: true
  validates :party_id, presence: true

end
