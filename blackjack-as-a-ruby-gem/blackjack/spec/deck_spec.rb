RSpec.describe Blackjack::Deck do
  let(:deck) {Blackjack::Deck.new}
  describe "#.new" do
    it "creates a new deck of 52 cards" do
      expect(deck.cards.size).to eq(52)
    end
  end

  describe "#deal!" do
    it "deals a card from the deck" do
      deck.deal!
      expect(deck.cards.size).to eq(51)
    end
  end
end
