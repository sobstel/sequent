class BlurredBackgroundView < UIVisualEffectView
  def rmq_build
    blur_effect = UIBlurEffect.effectWithStyle(UIBlurEffectStyleDark)
    self.effect = blur_effect
    self.frame = UIScreen.mainScreen.bounds
  end
end
