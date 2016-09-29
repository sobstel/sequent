require 'set'

# State handling
module Tractor
  module State
    # current state
    attr_reader :state

    #
    # @param name [Symbol] State name
    #
    def transition(name)
      name = name.to_sym

      raise 'Invalid state' unless self.class.states.include? name

      publish_state name

      @state = name
    end

    def self.included(base)
      base.extend ClassMethods
    end

    module ClassMethods
      attr_reader :states

      def state(name, &blk)
        name = name.to_sym

        subscribe_state name, blk

        @states ||= Set.new
        @states.add name
      end
    end
  end
end
