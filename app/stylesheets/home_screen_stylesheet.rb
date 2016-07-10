class HomeScreenStylesheet < ApplicationStylesheet

  def setup
    # Add stylesheet specific setup stuff here.
    # Add application specific setup stuff in application_stylesheet.rb
  end

  def root_view(st)
    st.background_color = color('#3c3c46')
  end

  # def level_choice(st)
  # end
  #
  def control(st)
    st.frame = {below_prev: 20, w: 100, h: 50, centered: :horizontal}
    st.text_alignment = :center
    st.color = color.white
    st.background_color = color.blue
    st.font = font.medium
    st.text = 'Play'
    st.corner_radius = 10
  end

  def body(st)
    st.frame = {below_prev: 20, l: 0, fr: 0, h: 320}
    st.background_color = color.translucent_black
  end

  def number(st)
    st.frame = {w: 60, h: 60}
    st.corner_radius = 30
    st.background_color = color.green
    st.font = font.small
    st.text_alignment = :center
    st.color = color.white
  end

  def number_tapped(st)
    st.background_color = color.red
    st.font = font.font_with_name('HelveticaNeue-Bold', 24)
  end

  #
  # def timer(st)
  # end
  #
  # def best_result(st)
  # end
end
