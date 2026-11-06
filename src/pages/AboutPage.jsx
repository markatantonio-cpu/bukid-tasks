function AboutPage() {
  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-2xl font-bold md:text-3xl">About Bukid Tasks</h1>
      <p>
        Running a small farm means a long list of jobs: watering the seedlings, feeding the
        chickens, fixing the irrigation canal, and bringing the harvest to the bagsakan. Bukid Tasks
        keeps that list in one place so the farm owner and farmhands can see what is still to do.
      </p>
      <p>
        The tasks and farmhands come from the free JSONPlaceholder API, so the names are sample
        text. Ticking a task done is not saved to the API and resets when you refresh.
      </p>
    </section>
  )
}

export default AboutPage
