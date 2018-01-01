RSpec.describe Blackjack::Card do
  let(:card) {Blackjack::Card.new(10, "♦")}
  let(:face_card) {Blackjack::Card.new("K", "♠")}
  let(:ace_card) {Blackjack::Card.new("A", "♠")}

  describe "#.new" do
    it "creates a card with a value and a suit" do
      expect(card.value).to eq(10)
      expect(card.suit).to eq("♦")
    end
  end

  describe "#face_card?" do
    it "checks if card is a face card" do
      expect(card.face_card?).to eq(false)
      expect(face_card.face_card?).to eq(true)
      expect(ace_card.face_card?).to eq(false)
    end
  end

  describe "#ace_card?" do
    it "checks if card is an Ace" do
      expect(card.ace_card?).to eq(false)
      expect(face_card.ace_card?).to eq(false)
      expect(ace_card.ace_card?).to eq(true)
    end
  end
end
