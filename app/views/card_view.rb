# Round card (button)
class CardView < UIButton
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

    rmq(view).off(:tap)
  end

  state :idle do |view|
    rmq(view).style do |st|
      st.background_color = rmq.color('#ccc')
    end

    rmq(view).off(:tap)
  end

  state :active do |view|
    rmq(view).style do |st|
      st.background_color = rmq.color('#22c064')
    end

    rmq(view).on(:tap) do |sender, _event|
      rmq.mp "tapped: #{rmq(sender).data}"
      rmq(sender).animations.throb(
        after: ->(_did_finish, q) { rmq.mp('animation finished') },
        duration: 0.1
      )
    end
  end

  def rmq_build
    @card_size = CARD_SIZE
    @block_size = BLOCK_SIZE

    transition :bare
    transition :idle
  end
end
