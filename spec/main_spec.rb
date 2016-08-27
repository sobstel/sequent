describe 'Sequent app' do
  it 'has a window' do
    app = UIApplication.sharedApplication
    app.windows.size.should == 1
  end
end
