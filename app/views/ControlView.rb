class ControlView < UIButton
  def rmq_build
    # sample for creating subviews
    # @version_label = rmq(self).append(UILabel, :version_label).get
    # @version_label.text = rmq.app.version

    @self = rmq(self)

    @self.on(:touch) do
      rmq.mp "play"
      rmq(:number_tapped).animations.throb(after: ->(did_finish, view_rmq) { view_rmq.remove_style(:number_tapped).apply_style(:number) },  duration: 0.2)
    end

    @self.animations.blink
  end
end
