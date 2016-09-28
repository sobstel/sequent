# body (circles etc)
class ChamberView < UIView
  include Tractor::State

  state :bare do
    rmq(self).style do |st|
      st.frame = { below_prev: 25 }
    end

    (1..4).each do |x|
      (1..4).each do |y|
        view = rmq(self).append! CardView

        padding = (CardView::BLOCK_SIZE - CardView::CARD_SIZE) / 2
        left = (x - 1) * CardView::BLOCK_SIZE + padding
        top = (y - 1) * CardView::BLOCK_SIZE + padding

        rmq(view).layout(l: left, t: top)
      end
    end

    rmq(self).style do |st|
      total_size = (4 * CardView::BLOCK_SIZE)
      left_margin = (rmq.device.width - total_size) / 2

      st.frame = { l: left_margin, w: total_size, h: total_size }
    end
  end

  def rmq_build
    transition :bare
  end
end
