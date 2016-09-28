require 'singleton'

module Tractor
  #
  # A pubsub event bus
  #
  class EventBus

    class << self

      #
      # Publish (announce) the event to all waiting listeners
      #
      # @param event_name [String, Symbol]
      # @param payload [Hash]
      # @return [EventBus]
      #
      def publish(event_name, payload)
        listeners(event_name).each { |listener| listener.call(payload) }
        self
      end

      #
      # Subscribe to the event
      #
      # @param event_name [String, Symbol]
      # @param blk
      # @return [EventBus]
      #
      def subscribe(event_name, &blk)
        listeners(event_name) << blk
        self
      end

      #
      # Clears all listeners for all event names
      #
      # @return [EventBus]
      #
      def purge
        @listeners = {}
        self
      end

      private
        def listeners(event_name)
          @listeners ||= {}
          @listeners[event_name] ||= []
        end
    end

  end

end
