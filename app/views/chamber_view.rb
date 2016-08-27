# body (circles etc)
class ChamberView < UIView
  def rmq_build
    rmq(self).style do |st|
      st.frame = { below_prev: 25 }
    end

    build_cards

    rmq(self).style do |st|
      block_size = rmq(CardView)[0].get.block_size
      total_size = (4 * block_size)
      left_margin = (rmq.device.width - total_size) / 2

      st.frame = { l: left_margin, w: total_size, h: total_size }
    end
  end

  private

  def build_cards
    (1..4).each do |x|
      (1..4).each do |y|
        view = rmq(self).append! CardView

        padding = (view.block_size - view.card_size) / 2
        left = (x - 1) * view.block_size + padding
        top = (y - 1) * view.block_size + padding

        rmq(view).layout(l: left, t: top)
      end
    end
  end
end
