# State handling
module StateMachine
  def transition(name)
    raise 'Invalid state' unless self.class.states[name]
    self.class.states[name].call(self)
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
