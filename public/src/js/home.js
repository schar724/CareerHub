fetch("/data")
  .then((resp) => resp.json())
  .then((data) => {
    const source = document.querySelector("#jobCardTemplate").innerHTML;
    const template = Handlebars.compile(source);
    const cards = document.querySelector("#cards");

    //   for (const job in data.jobs) {
    //     console.log(job.job_title);
    //   }

    data.jobs.forEach((job) => {
      const html = template(job);
      cards.innerHTML += html;
    });
  });
