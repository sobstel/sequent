# body (circles etc)
class ChamberView < UIView
  include StateMachine

  state :bare do |view|
    rmq(view).style do |st|
      st.frame = { below_prev: 25 }
    end

    (1..4).each do |x|
      (1..4).each do |y|
        subview = rmq(view).append! CardView

        padding = (subview.block_size - subview.card_size) / 2
        left = (x - 1) * subview.block_size + padding
        top = (y - 1) * subview.block_size + padding

        rmq(subview).layout(l: left, t: top)
      end
    end

    rmq(view).style do |st|
      block_size = rmq(CardView)[0].get.block_size
      total_size = (4 * block_size)
      left_margin = (rmq.device.width - total_size) / 2

      st.frame = { l: left_margin, w: total_size, h: total_size }
    end
  end

  def rmq_build
    transition :bare
  end
end
