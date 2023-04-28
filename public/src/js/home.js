fetchData().then((data) => {
  //   console.log(data);
  const jobCard = document.querySelector("#jobCardTemplate").innerHTML;
  const template = Handlebars.compile(jobCard);
  const cards = document.querySelector("#cards");

  const learnMoreModal = document.querySelector("#learnMoreTemplate").innerHTML;
  const learnMoreTemplate = Handlebars.compile(learnMoreModal);
  const learnMore = document.querySelector("#learn-more-modal");

  const searchBtn = document.querySelector("#searchButton");

  loadAllCards();

  searchBtn.addEventListener("click", function (e) {
    const jobQuery = document.querySelector("#jobQuery").value;
    const locationQuery = document.querySelector("#locationQuery").value;

    if (jobQuery && locationQuery) {
      search(jobQuery, locationQuery);
    } else if (jobQuery) {
      searchJob(jobQuery);
    } else if (locationQuery) {
      searchLocation(locationQuery);
    } else {
      loadAllCards();
    }
  });

  const toggle = document.querySelectorAll(".learnMore");
  for (const t of toggle) {
    t.addEventListener("click", function (e) {
      const job = data.jobs.find((job) => job.job_id == e.target.id);
      const html = learnMoreTemplate(job);
      learnMore.innerHTML = "";
      learnMore.innerHTML = html;
      showLearnMoreModal();
    });
  }

  function loadAllCards() {
    cards.innerHTML = "";
    data.jobs.forEach((job) => {
      const html = template(job);
      cards.innerHTML += html;
    });
  }

  function search(jobQuery, locationQuery) {
    const filtered = data.jobs.filter((job) => {
      return (
        job.job_title.toLowerCase().includes(jobQuery.toLowerCase()) &&
        job.location.toLowerCase().includes(locationQuery.toLowerCase())
      );
    });

    cards.innerHTML = "";
    filtered.forEach((job) => {
      const html = template(job);
      cards.innerHTML += html;
    });
    return;
  }

  function searchLocation(locationQuery) {
    const filtered = data.jobs.filter((job) => {
      return job.location.toLowerCase().includes(locationQuery.toLowerCase());
    });

    cards.innerHTML = "";
    filtered.forEach((job) => {
      const html = template(job);
      cards.innerHTML += html;
    });
    return;
  }
  function searchJob(jobQuery) {
    const filtered = data.jobs.filter((job) => {
      return job.job_title.toLowerCase().includes(jobQuery.toLowerCase());
    });

    cards.innerHTML = "";
    filtered.forEach((job) => {
      const html = template(job);
      cards.innerHTML += html;
    });
    return;
  }
});

async function fetchData() {
  try {
    const response = await fetch("/data");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function showApplyModal() {
  const applyModal = document.querySelector("#apply-modal");
  applyModal.classList.remove("hidden");
}

function hideApplyModal() {
  const applyModal = document.querySelector("#apply-modal");
  applyModal.classList.add("hidden");
}

function showLearnMoreModal() {
  const learnMoreModal = document.querySelector("#learn-more-modal");
  learnMoreModal.classList.remove("hidden");
}

function hideLearnMoreModal() {
  const learnMoreModal = document.querySelector("#learn-more-modal");
  learnMoreModal.classList.add("hidden");
}
