# Round card (button)
class CardView < UIButton
  attr_reader :card_size, :block_size

  def rmq_build
    @card_size = 58
    @block_size = 74

    rmq(self).style do |st|
      st.frame = {w: @card_size, h: @card_size}
      st.corner_radius = (@card_size / 2)
      st.background_color = rmq.color('#22c064')
      st.font = rmq.font.small
      st.text_alignment = :center
      st.color = rmq.color.white
    end

    # number tapped
    # st.background_color = color('#e0483e')
    # st.font = font.font_with_name('HelveticaNeue-Bold', 24)

    rmq(self).on(:tap) do |sender, _event|
      rmq.mp "tapped: #{rmq(sender).data}"
      rmq(sender).animations.sink_and_throb(
        after: ->(_did_finish, q) { q.apply_style(:number_tapped) }
      )
    end
  end

  def debug
    # rmq(self).data('d')
  end
end
