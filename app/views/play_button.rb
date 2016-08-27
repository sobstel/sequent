# Control (button)
class PlayButton < UIButton
  def rmq_build
    # sample for creating subviews
    # @version_label = rmq(self).append(UILabel, :version_label).get
    # @version_label.text = rmq.app.version

    rmq(self).style do |st|
      st.frame = {below_prev: 60, w: 140, h: 46, centered: :horizontal}
      # st.text_alignment = :center
      # st.color = color.white
      st.background_color = rmq.color('#1352e2')
      # st.font = font.small
      # st.text = 'PLAY'
      st.corner_radius = 23
      # st.view.setTitleColor(color.black, forState: UIControlStateHighlighted)

      attributed_text = NSMutableAttributedString.alloc.initWithString("PLAY")
      attributed_text.addAttribute(NSKernAttributeName, value: 1.5, range: [0, attributed_text.length])
      attributed_text.addAttribute(NSForegroundColorAttributeName, value: rmq.color.white, range: [0, attributed_text.length])
      st.attributed_text = attributed_text
    end

    rmq(self).on(:touch) do
      # todo: emit event
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
