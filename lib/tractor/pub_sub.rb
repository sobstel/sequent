module Tractor
  #
  # Action and state publish/subscribe
  #
  module PubSub
    def publish_action(action, payload)
      Tractor::EventBus.publish "#{self.class}~#{action}", payload
    end

    def subscribe_action(action, &blk)
      Tractor::EventBus.subscribe "#{self.class}~#{action}", blk
    end

    def publish_state(state, payload)
      Tractor::EventBus.publish "#{self.class}\##{state}", payload
    end

    def subscribe_state
      Tractor::EventBus.subscribe "#{self.class}\##{state}", blk
    end
  end
end
