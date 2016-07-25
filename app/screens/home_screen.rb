# Home (main)
class HomeScreen < ApplicationScreen
  title 'Sequent'
  nav_bar true

  stylesheet HomeScreenStylesheet

  def on_load
    # set_nav_bar_button :left, system_item: :camera, action: :nav_left_button
    set_nav_bar_button :right, system_item: :add, action: :about

    append(ControlView, :control)
    append(BodyView, :body)
  end

  def about
    open AboutScreen
  end
end
