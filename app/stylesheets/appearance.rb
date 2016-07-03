# UIAppearance. All settings here apply to all views of that type.
# What you can't do here, do in ApplicationStylesheet
class StandardAppearance
  def self.apply(window)
    Dispatch.once do

      UIWindow.appearance.tap do |o|
        o.tintColor = rmq.color.blue
      end

      UILabel.appearance.tap do |o|
        o.setTextColor rmq.color.black
        o.font = rmq.font.medium
      end

      # UITabBar.appearance.tap do |o|
      #   o.setTintColor rmq.color.blue
      # end

      # UITableView.appearance.tap do |o|
      #   o.separatorColor = rmq.color.clear
      # end

      # UINavigationBar.appearance.tap do |o|
      #   o.barTintColor = rmq.color.black
      #    o.setTintColor rmq.color.white

      #    o.setTitleTextAttributes( {
      #      UITextAttributeFont => rmq.font.medium,
      #      UITextAttributeTextColor => rmq.color.white
      #      #UITextAttributeTextShadowColor => color.clear
      #    })
      #  end

      #  UIBarButtonItem.appearance.tap do |o|
      #    o.setTitleTextAttributes( {
      #      UITextAttributeFont => rmq.font.small_regular,
      #      UITextAttributeTextColor => rmq.color.white
      #      #UITextAttributeTextShadowColor => rmq.color.clear
      #    }, forState: UIControlStateNormal)
      #    o.setTitleTextAttributes( {
      #      UITextAttributeFont => rmq.font.small,
      #      UITextAttributeTextColor => rmq.color.gray
      #      #UITextAttributeTextShadowColor => rmq.color.clear
      #    }, forState: UIControlStateDisabled)
      #  end

    end
  end
end

