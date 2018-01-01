require_relative "blackjack/version"

module Blackjack
  # Your code goes here...
  class Card
    attr_reader :value, :suit

    def initialize(value, suit)
      @value = value
      @suit = suit
    end

    def face_card?
      face_values = ["J", "Q", "K"]
      if face_values.include?(@value)
        true
      else
        false
      end
    end

    def ace_card?
      if @value == "A"
        true
      else
        false
      end
    end
  end

  class Deck

    VALUES = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
    SUITS = ["♥","♦","♣","♠"]

    attr_reader :cards

    def initialize
      @cards = []
      VALUES.each do |value|
        SUITS.each do |suit|
          @cards << Blackjack::Card.new(value, suit)
        end
      end
      @cards.shuffle!
    end

    def deal!
      @cards.pop
    end

  end

  class Hand
    attr_reader :cards

    def initialize
      @cards = []
    end

    def dealt!(card)
      @cards << card
    end

    def score
      total = 0
      aces = 0
      @cards.each do |card|
        if card.face_card?
          total += 10
        elsif card.ace_card?
          aces += 1
        else
          total += card.value
        end
      end
      if aces > 0
        aces.times do
          if total + 11 > 21
            total += 1
          else
            total += 11
          end
        end
      end
      total
    end

  end

  class Game

    def self.deal(to, from)
      to.dealt!(from.deal!)
    end

    def self.print_score(name, hand)
      "#{name} score: #{hand.score}\n\n"
    end

    def self.start
      player_hand= Blackjack::Hand.new
      computer_hand = Blackjack::Hand.new
      player_name = "Player"
      computer_name = "Dealer"
      # Your code here...
      deck = Blackjack::Deck.new

      puts "Welcome to Blackjack!\n\n"

      2.times do
        deal(player_hand, deck)
        deal(computer_hand, deck)
      end

      player_hand.cards.each do |card|
        puts "Player was dealt #{card.value}#{card.suit}"
      end
      puts print_score(player_name, player_hand)

      players_move = ""
      while players_move.downcase != "s"
        print "Hit or stand (H/S): "
        players_move = gets.chomp

        if players_move.downcase == "h"
          deal(player_hand, deck)
          puts "\nPlayer was dealt #{player_hand.cards[-1].value}#{player_hand.cards[-1].suit}"
          puts print_score(player_name, player_hand)

          if player_hand.score > 21
            players_move = "s"
            puts "Bust! You lose..."
          elsif player_hand.score == 21
            players_move = "s"
          end
        elsif players_move.downcase == "s"
          puts print_score(player_name, player_hand) + "\n"
        else
          puts "Invalid input!"
        end
      end

      if player_hand.score <= 21
        computer_hand.cards.each do |card|
          puts "Dealer was dealt #{card.value}#{card.suit}"
        end
        puts print_score(computer_name, computer_hand)
        while computer_hand.score < 17
          deal(computer_hand, deck)
          puts "Dealer was dealt #{computer_hand.cards[-1].value}#{computer_hand.cards[-1].suit}"
          puts print_score(computer_name, computer_hand)
        end

        if computer_hand.score <= 21
          puts "Dealer stands.\n\n"

          if player_hand.score > computer_hand.score
            puts "You win!"
          elsif player_hand.score == computer_hand.score
            puts "Tie!"
          else
            puts "Dealer wins."
          end
        else
          puts "Dealer busts. You win!"
        end
      end
    end
  end
end
