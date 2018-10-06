json.partial! 'api/parties/party', party: @party
  @party.guests.each do |guest|
    json.extract! guest, :name, :age, :favorite_color
    json.gifts guest.gifts
  end
end

# json.array! @gifts do |gift|
#   json.partial! 'api/gifts/gift', gift: gift
# end
