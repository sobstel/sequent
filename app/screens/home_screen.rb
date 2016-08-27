# Home (main)
class HomeScreen < PM::Screen
  title '{sequent}'
  nav_bar true
  status_bar :none

  stylesheet ApplicationStylesheet

  def on_load
    # set_nav_bar_button :left, system_item: :camera, action: :nav_left_button
    set_nav_bar_button :right, system_item: :add, action: :about

    append(PlayButton)
    append(ChamberView)
  end

  def about
    open AboutScreen
  end
end
