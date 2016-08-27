# State handling
module StateMachine
  attr_reader :state

  def transition(name)
    raise 'Invalid state' unless self.class.states[name]
    self.class.states[name].call
    @state = name
  end

  def self.included(base)
    base.extend(ClassMethods)
  end

  module ClassMethods
    attr_reader :states

    def state(name, &block)
      @states ||= {}
      @states[name] = block
    end
  end
end
