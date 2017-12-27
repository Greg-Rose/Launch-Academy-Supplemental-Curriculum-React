class CreateFortunes < ActiveRecord::Migration
  def change
    create_table :fortunes do |t|
      t.string :text, null: false
    end
  end
end
