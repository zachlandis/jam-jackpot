class AddRedemptionInstructionsToPrize < ActiveRecord::Migration[7.0]
  def change
    add_column :prizes, :redemption_instructions, :string
  end
end
