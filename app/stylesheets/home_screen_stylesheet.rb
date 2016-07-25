class HomeScreenStylesheet < ApplicationStylesheet

  def setup
    # Add stylesheet specific setup stuff here.
    # Add application specific setup stuff in application_stylesheet.rb
  end

  def root_view(st)
    st.background_color = color('#f3f3f3')
  end

  # def level_choice(st)
  # end
  #
  def control(st)
    st.frame = {below_prev: 100, w: 140, h: 46, centered: :horizontal}
    # st.text_alignment = :center
    # st.color = color.white
    st.background_color = color('#1352e2')
    # st.font = font.small
    # st.text = 'PLAY'
    st.corner_radius = 23
    # st.view.setTitleColor(color.black, forState: UIControlStateHighlighted)

    attributed_text = NSMutableAttributedString.alloc.initWithString("PLAY")
    attributed_text.addAttribute(NSKernAttributeName, value: 1.5, range: [0, attributed_text.length])
    attributed_text.addAttribute(NSForegroundColorAttributeName, value: color.white, range: [0, attributed_text.length])
    st.attributed_text = attributed_text

  end

  def body(st)
    st.frame = {below_prev: 25, l: 0, fr: 0, h: 320}
    # st.background_color = color.white
  end

  def number(st)
    st.frame = {w: 56, h: 56}
    st.corner_radius = 28
    st.background_color = color('#22c064')
    st.font = font.small
    st.text_alignment = :center
    st.color = color.white

    # st.border_width = 1
    # st.border_color = color('#22c064')
    # st.color = color('#22c064')
  end

  def number_tapped(st)
    st.background_color = color('#e0483e')
    st.font = font.font_with_name('HelveticaNeue-Bold', 24)
  end

  #
  # def timer(st)
  # end
  #
  # def best_result(st)
  # end
end
