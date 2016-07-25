# Control (button)
class ControlView < UIButton
  def rmq_build
    # sample for creating subviews
    # @version_label = rmq(self).append(UILabel, :version_label).get
    # @version_label.text = rmq.app.version

    rmq(self).on(:touch) do
      rmq.mp 'touch'
      rmq(:number_tapped).animations.throb(
        after: ->(_did_finish, q) { q.remove_style(:number_tapped).apply_style(:number) },
        duration: 0.2
      )
    end

    rmq(self).on(:touch_start) do |sender, _event|
      rmq.mp 'touch_start'
      rmq(sender).style do |st|
        st.background_color = rmq.color(base: st.background_color, a: 0.8)
      end
    end

    rmq(self).on(:touch_stop) do |sender, _event|
      rmq.mp 'touch_stop'
      rmq(sender).style do |st|
        st.background_color = rmq.color('#1352e2')
      end
    end
  end
end
