class TableSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills
    add_column :skills, :name, :varchar
    add_column :skills, :level, :integer
    add_column :skills, :image, :varchar
    add_column :skills, :fk, :integer
  end
end
