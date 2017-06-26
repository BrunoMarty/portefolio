class TableHomes < ActiveRecord::Migration[5.1]
  def change
    create_table :homes
    add_column :homes, :text, :text
  end
end
