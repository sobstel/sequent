# Round card (button)
class CardView < UIButton
  include SmartView
  include StateMachine

  attr_reader :card_size, :block_size

  CARD_SIZE = 58
  BLOCK_SIZE = 74

  state :bare do |view|
    rmq(view).style do |st|
      st.frame = { w: view.card_size, h: view.card_size }
      st.corner_radius = (view.card_size / 2)
      st.font = rmq.font.medium_bold
      st.text_alignment = :center
      st.color = rmq.color.white
    end
  end

  state :idle do |view|
    rmq(view).style do |st|
      st.background_color = rmq.color('#ccc')
    end
  end

  state :active do |view|
    rmq(view).style do |st|
      st.background_color = rmq.color('#22c064')
    end
  end

  def build
    @card_size = CARD_SIZE
    @block_size = BLOCK_SIZE

    transition :idle
  end

  def events
    rmq(self).on(:tap) do |sender, _event|
      rmq.mp "tapped: #{rmq(sender).data}"
      rmq(sender).animations.throb(
        after: ->(_did_finish, q) { rmq.mp('animation finished') },
        duration: 0.1
      )
    end
  end
end
