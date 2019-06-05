class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price
end
