class ApplicationStylesheet < RubyMotionQuery::Stylesheet
  def application_setup
    # TODO: set my fonts
    font_family = 'Helvetica Neue'
    font.add_named :large, font_family, 36
    font.add_named :medium, font_family, 24
    font.add_named :small, font_family, 18

    font_family_bold = 'HelveticaNeue-Bold'
    font.add_named :medium_bold, font_family_bold, 24

    # TODO: set my mcolors
    color.add_named :bg, '#f3f3f3'
    # color.add_named :tint, '236EB7'
    # color.add_named :translucent_black, color(0, 0, 0, 0.4)
    # color.add_named :battleship_gray,   '#7F7F7F'

    StandardAppearance.apply app.window
  end

  def root_view(st)
    st.background_color = color.bg

    # TODO: test if really works
    st.tint_color = color.green
  end

  # def standard_button(st)
  #   st.frame = {w: 40, h: 18}
  #   st.background_color = color.tint
  #   st.color = color.white
  # end
  #
  # def standard_label(st)
  #   st.frame = {w: 40, h: 18}
  #   st.background_color = color.clear
  #   st.color = color.black
  # end
  #
  # def rounded_image(st)
  #   st.view.layer.cornerRadius = st.frame.width/2
  #   st.clips_to_bounds = true
  # end
end
