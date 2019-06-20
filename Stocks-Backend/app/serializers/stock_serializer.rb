class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :change, :quantity, :user_id
end
