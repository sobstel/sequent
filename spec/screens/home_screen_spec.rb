describe "HomeScreen" do
  tests HomeScreen

  before do
    @controller = HomeScreen.new
  end

  it "should include the text label we added" do
    view('Hello World').should.not.be.nil
  end
end
