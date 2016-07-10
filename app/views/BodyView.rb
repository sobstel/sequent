class BodyView < UIView
  def rmq_build
    (1..4).each do |row|
      (1..4).each do |col|
        i = (row - 1) * 4 + col;

        subview = rmq(self).append!(UILabel, :number)
        rmq(subview).data(i.to_s)

        base_margin = 15
        space = 75

        l = (col - 1) * space + base_margin
        t = (row - 1) * space + base_margin

        rmq(subview).layout(l: l, t: t)

        rmq(subview).on(:tap) do |sender, event|
          rmq(sender).animations.sink_and_throb(after: ->(did_finish, view_rmq) { view_rmq.apply_style(:number_tapped) })
          rmq.mp "tapped: #{rmq(sender).data}"
        end

      end
    end
  end
end
