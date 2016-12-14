module Tractor
  module Actor
    def self.included(base)
      base.include Tractor::PubSub
      base.include Tractor::State
    end
  end
end
