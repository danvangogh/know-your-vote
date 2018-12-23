class AddLeadernameToParties < ActiveRecord::Migration[5.1]
  def change
    add_column :parties, :Leadername, :string
  end
end
