# Round card (button)
class CardView < UIButton
  include StateMachine

  attr_reader :card_size, :block_size

  CARD_SIZE = 58
  BLOCK_SIZE = 74

  state :bare do
    rmq(self).style do |st|
      st.frame = { w: CARD_SIZE, h: CARD_SIZE }
      st.corner_radius = (CARD_SIZE / 2)
      st.font = rmq.font.medium_bold
      st.text_alignment = :center
      st.color = rmq.color.white
    end

    rmq(self).off(:tap)
  end

  state :idle do
    rmq(self).style do |st|
      st.background_color = rmq.color('#ccc')
    end

    rmq(self).off(:tap)
  end

  state :active do
    rmq(self).style do |st|
      st.background_color = rmq.color('#22c064')
    end

    rmq(self).off(:tap).on(:tap) do |sender, _event|
      #TODO send event
      rmq.mp "tapped: #{rmq(sender).data}"
      rmq(sender).animations.throb(
        after: ->(_did_finish, q) { rmq.mp('animation finished') },
        duration: 0.1
      )
    end
  end

  def rmq_build
    transition :bare
    transition :idle
  end
end
