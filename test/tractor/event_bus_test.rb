require 'minitest/autorun'
require_relative '../../lib/tractor/event_bus.rb'

class EventBusTest < MiniTest::Test
  def test_subscribed_listeners_are_executed_on_publish_for_given_event_name
    # random number to ensure different payload per test run
    expected_payload = { random_number: rand }
    actual_payload1 = {}
    actual_payload2 = {}
    counter = 0

    listener1 = proc do |payload|
      actual_payload1 = payload
      counter += 1
    end
    listener2 = proc do |payload|
      actual_payload2 = payload
      counter += 1
    end
    listener3 = proc do |payload|
      counter += 1
    end

    Tractor::EventBus.subscribe :group, &listener1
    Tractor::EventBus.subscribe :group, &listener2
    Tractor::EventBus.subscribe :other_group, &listener3

    Tractor::EventBus.publish :group, expected_payload

    assert_equal expected_payload, actual_payload1
    assert_equal expected_payload, actual_payload2
    assert_equal 2, counter
  end
end
