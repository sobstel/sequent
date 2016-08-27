module SmartView
  def rmq_build
    build
    events
    transition :bare if self.class.states[:bare]
  end
end
