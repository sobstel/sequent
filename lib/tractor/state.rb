require 'set'

# State handling
module Tractor
  module State
    # include PubSub

    # current state
    attr_reader :state

    def transition(name)
      name = name.to_sym

      raise 'Invalid state' unless self.class.states.include? name

      # self.class.states[name].call
      EventBus.publish name

      @state = name
    end

    def self.included(base)
      base.extend ClassMethods
    end

    module ClassMethods
      attr_reader :states

      def publish()
        EventBus.publish(self.class, name: name, self: self)
      end

      def state(name, &block)
        name = name.to_sym

        # EventBus.subscribe "#{self.class}.#{name}", block

        @states ||= Set.new
        @states.add name
        # @states[name] = block
      end
    end
  end
end
