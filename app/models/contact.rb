class Contact < ActiveRecord::Base
  belongs_to :kind

  paginates_per 15
  #Pra poder apagar os dados relacionados a tabela
  has_one :address, dependent: :destroy 
  has_many :phones, dependent: :destroy

  accepts_nested_attributes_for :address
  accepts_nested_attributes_for :phones, reject_if: :all_blank, allow_destroy: true
  
  validates :name, presence: true, length: { minimum: 3 }
  validates :email, presence: true
end