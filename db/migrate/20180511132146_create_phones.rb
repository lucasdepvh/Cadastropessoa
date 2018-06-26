class CreatePhones < ActiveRecord::Migration[5.1]
  def change
    create_table :phones do |t|
      t.string :phone
      t.references :contact, foreign_key: true

      t.timestamps null: false
    end
  end
end
