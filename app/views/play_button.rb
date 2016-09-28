# Control (button)
class PlayButton < UIButton
  include Tractor::State

  state :bare do
    rmq(self).style do |st|
      st.frame = { below_prev: 60, w: 140, h: 46, centered: :horizontal }
      st.background_color = rmq.color('#1352e2')
      st.corner_radius = 23

      attributed_text = NSMutableAttributedString.alloc.initWithString('PLAY')
      attributed_text_range = [0, attributed_text.length]
      attributed_text.addAttribute(NSKernAttributeName, value: 1.5, range: attributed_text_range)
      attributed_text.addAttribute(NSForegroundColorAttributeName, value: rmq.color.white, range: attributed_text_range)
      st.attributed_text = attributed_text
    end
  end

  state :active do
    rmq(self).on(:tap) do
      CreateSequence.new.call
    end
  end

  def rmq_build
    transition :bare
    transition :active
  end
end
