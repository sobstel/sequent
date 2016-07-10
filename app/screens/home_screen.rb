class HomeScreen < PM::Screen
  nav_bar false

  stylesheet HomeScreenStylesheet

  def on_load
    append(ControlView, :control)
    append(BodyView, :body)
    append(FooterView, :footer)
  end

  # Hide status bar
  def prefersStatusBarHidden
    true
  end
end
