# Creates number sequence
class CreateSequence
  def call
    rmq(CardView).get.shuffle.to_enum.with_index(1).each do |view, index|
      rmq(view).data(index.to_s)
      rmq(view).get.transition(:active)
    end
  end
end
