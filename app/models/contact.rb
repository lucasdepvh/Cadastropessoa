class Contact < ApplicationRecord
  belongs_to :kind
  has_one :address
  has_many :phones
  
end
