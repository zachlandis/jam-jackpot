class ChangePrevWinsToArr < ActiveRecord::Migration[7.0]
  def up
    execute <<-SQL
      ALTER TABLE users
      ALTER COLUMN prev_wins TYPE text[] USING prev_wins::text[];
    SQL
  end

  def down
    execute <<-SQL
      ALTER TABLE users
      ALTER COLUMN prev_wins TYPE character varying[] USING prev_wins::character varying[];
    SQL
  end
end
