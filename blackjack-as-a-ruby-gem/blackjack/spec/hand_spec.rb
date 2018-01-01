RSpec.describe Blackjack::Hand do
  let(:deck) {Blackjack::Deck.new}
  let(:hand) {Blackjack::Hand.new}
  describe "#.new" do
    it "creates an empty hand" do
      expect(hand.cards.empty?).to eq(true)
    end
  end

  describe "#dealt!" do
    it "adds cards to hand dealt from deck" do
      hand.dealt!(deck.deal!)
      expect(hand.cards.size).to eq(1)
      expect(deck.cards.size).to eq(51)
    end
  end

  describe "#score" do
    it "adds up the score of your hand" do
      hand.dealt!(Blackjack::Card.new(10, "♦"))
      hand.dealt!(Blackjack::Card.new("A", "♠"))
      expect(hand.score).to eq(21)
    end

    it "properly adds the score of an ace to not bust" do
      hand.dealt!(Blackjack::Card.new("A", "♦"))
      hand.dealt!(Blackjack::Card.new("A", "♠"))
      expect(hand.score).to eq(12)
    end

    it "properly adds up the score of 3 cards including an ace to get blackjack" do
      hand.dealt!(Blackjack::Card.new("J", "♦"))
      hand.dealt!(Blackjack::Card.new("K", "♠"))
      hand.dealt!(Blackjack::Card.new("A", "♣"))
      expect(hand.score).to eq(21)
    end
  end
end
