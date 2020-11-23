export default (function pubsub() {
  const events = {};
  function subscribe(event, callback) {
    // if the event doesn't exist, create it
    if (!events[event]) events[event] = [];

    events[event].push(callback);

    // return the unsubscribe function
    return {
      unsubscribe() {
        events[event].filter((fn) => fn !== callback);
      },
    };
  }

  function publish(event, data) {
    if (!events[event]) return;
    // call each callback function with the provided data
    events[event].forEach((fn) => fn(data));
  }

  return { subscribe, publish };
})();
